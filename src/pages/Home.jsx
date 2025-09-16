import { Helmet } from "react-helmet-async";

const Home = () => {
  const roles = [
    "MERN Stack Developer",
    "DevOps Engineer",
    "IoT Enthusiast",
    "FinTech Developer"
  ];

  return (
    <div className="section">
      <Helmet>
        <title>Manoj Gowda | Full Stack Developer & DevOps Engineer</title>
        <meta
          name="description"
          content="Hi, I'm Manoj Gowda — a MERN stack developer and DevOps engineer with expertise in IoT, fintech, and cloud solutions. Explore my projects, skills, and professional experience."
        />
        <meta
          name="keywords"
          content="Manoj Gowda, MERN stack developer, full stack developer, DevOps engineer, IoT enthusiast, fintech developer, software engineer, React, Node.js, MongoDB, portfolio, projects, manojgowda.in"
        />
        <meta name="author" content="Manoj Gowda" />
        <link rel="canonical" href="https://www.manojgowda.in" />
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
                <span className="typing-effect gradient-text">
                  {roles[0]}
                </span>
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
                  href="https://linkedin.com/in/manojgowdabr89"
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
                  href="https://github.com/ManojGowda89"
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
