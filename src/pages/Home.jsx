import { Helmet } from "react-helmet-async";

const Home = () => {
  const roles = [
    "MERN Stack Developer",
    "DevOps Engineer",
    "IoT Enthusiast",
    "FinTech Developer",
  ];

  return (
    <div className="section">
      <Helmet>
        <title>
          Manoj Gowda | Full Stack Developer, MERN Stack & DevOps Engineer
        </title>
        <meta
          name="description"
          content="Hi, I'm Manoj Gowda — Full Stack Developer and DevOps Engineer from Bengaluru, India. I specialize in MERN stack, IoT solutions, fintech applications, cloud deployments, and scalable web development. Explore my projects, skills, experience, and contact information."
        />
        <meta
          name="keywords"
          content="
      Manoj Gowda, Manoj Gowda developer, Full Stack Developer Bengaluru, MERN stack engineer, 
      DevOps Engineer India, IoT developer, fintech developer, React.js developer, Node.js developer, 
      MongoDB, Express.js, software engineer portfolio, manojgowda.in, portfolio, projects, hire Manoj Gowda, cloud engineer
    "
        />
        <meta name="author" content="Manoj Gowda" />
        <link rel="canonical" href="https://www.manojgowda.in" />

        {/* Open Graph (for LinkedIn/FB/WhatsApp sharing) */}
        <meta
          property="og:title"
          content="Manoj Gowda | Full Stack Developer & DevOps Engineer"
        />
        <meta
          property="og:description"
          content="Explore the portfolio of Manoj Gowda — a Full Stack Developer & DevOps Engineer specializing in MERN stack, IoT, fintech, and cloud solutions."
        />
        <meta property="og:url" content="https://www.manojgowda.in" />
        <meta property="og:type" content="website" />

        {/* Twitter Card (for X/Twitter preview) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Manoj Gowda | Full Stack Developer & DevOps Engineer"
        />
        <meta
          name="twitter:description"
          content="Hi, I'm Manoj Gowda — MERN stack developer and DevOps engineer with expertise in IoT, fintech, and cloud solutions. Check out my projects and portfolio."
        />
      </Helmet>

      <div className="container">
        <div className="home-content fade-in">
          <div className="hero-section">
            <div className="hero-text">
              <h1 className="hero-title">
                👋 Hello, I'm{" "}
                <span className="gradient-text">Manoj Gowda!</span>
              </h1>

              <div className="role-display">
                <span className="typing-effect gradient-text">{roles[0]}</span>
              </div>

              <p className="hero-description">
                Software Engineer specializing in MERN stack and DevOps with
                experience in building scalable IoT, fintech, and cloud
                solutions. Passionate about creating efficient, user-friendly
                applications and leveraging modern technologies to solve
                real-world problems.
              </p>

              <div className="hero-stats">
                <div className="stat-item">
                  <h3 className="gradient-text">100K+</h3>
                  <p>Devices Handled</p>
                </div>
                <div className="stat-item">
                  <h3 className="gradient-text">2+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h3 className="gradient-text">25+</h3>
                  <p>Projects Built</p>
                </div>
              </div>

              <div className="hero-actions">
                <a href="/contact" className="btn btn-primary">
                  Get In Touch
                </a>
                <a
                  href="https://www.manojgowda.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  View Website
                </a>
              </div>

              <div className="social-links">
                <a
                  href="/linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <img
                    src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                    alt="LinkedIn"
                  />
                </a>
                <a
                  href="/github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <img
                    src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                    alt="GitHub"
                  />
                </a>
                <a
                  href="mailto:mail@manojgowda.in"
                  className="social-link"
                  aria-label="Email"
                >
                  <img
                    src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"
                    alt="Email"
                  />
                </a>
                <a
                  href="/whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="WhatsApp"
                >
                  <img
                    src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"
                    alt="WhatsApp"
                  />
                </a>
                <a
                  href="/instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Instagram"
                >
                  <img
                    src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
                    alt="Instagram"
                  />
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="floating-card">
                <div className="card-content">
                  <h3>🔭 Currently</h3>
                  <p>
                    Working at <strong>Skoegle IOT Innovations</strong>{" "}
                    developing scalable IoT solutions
                  </p>
                </div>
              </div>
              <div className="floating-card">
                <div className="card-content">
                  <h3>🌱 Building</h3>
                  <p>
                    Products that handle real-time data from thousands of
                    devices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
