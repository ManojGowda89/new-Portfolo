// server.js
import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

dotenv.config();
const app = express();

// Security middlewares
app.disable("x-powered-by");
app.use(helmet());

// CORS setup
const allowedOrigins = [
  "https://manojgowda.in",
  "https://www.manojgowda.in",
  "https://profile.manojgowda.in",
  "http://localhost:5173"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

// Rate limiting: 1 request per 10 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 1,
  message: { success: false, message: "Too many requests, please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use("/contact", contactLimiter);

// Configure transporter for Zoho SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASSWORD,
  },
});

// Decode Basic Auth
function decodeBasicAuth(authHeader) {
  if (!authHeader || !authHeader.startsWith("Basic ")) return null;
  const base64 = authHeader.split(" ")[1];
  const decoded = Buffer.from(base64, "base64").toString("utf8");
  const [username, password] = decoded.split(":");
  return { username, password };
}

// Contact Route (GET)
app.get("/contact", async (req, res) => {
  try {
    const auth = decodeBasicAuth(req.headers.authorization);
    if (!auth) {
      return res.status(401).json({ success: false, error: "Unauthorized" });
    }

    const { username: userEmail, password } = auth;

    if (!password.includes("|")) {
      return res.status(400).json({ success: false, error: "Password format invalid" });
    }

    const [name, subject, message] = password.split("|");

    if (!name || !subject || !message) {
      return res.status(400).json({ success: false, error: "All fields required" });
    }

    // 1️⃣ Send to you
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.ZOHO_EMAIL}>`,
      to: "manojgowdabr89@gmail.com",
      subject: `📩 New Enquiry from ${name}`,
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${userEmail}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr/>
        <p>Contact page secured with Basic Auth + Rate Limiting.</p>
      `,
    });

    // 2️⃣ Auto-reply to user
    await transporter.sendMail({
      from: `"Manoj Gowda" <${process.env.ZOHO_EMAIL}>`,
      to: userEmail,
      subject: "✅ Thank you for approaching me",
      text: `Hello ${name},\n\nThank you for approaching me through my portfolio.\nThis is an automated email. If I am interested, I will get back to you.\n\nRegards,\nManoj Gowda`,
      html: `
        <p>Hello <strong>${name}</strong>,</p>
        <p>Thank you for approaching me through my portfolio.</p>
        <p>This is an <strong>automated email</strong>. If I am interested, I will get back to you.</p>
        <br/>
        <p>Regards,<br/>Manoj Gowda</p>
      `,
    });

    res.json({ success: true, message: "Enquiry processed successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Secure server running on port ${PORT}`));
