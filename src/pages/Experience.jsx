import { Helmet } from "react-helmet-async";

const Experience = () => {
  const experiences = [
    {
      company: "Skoegle IOT Innovations Pvt Ltd",
      role: "Software Engineer",
      period: "January 2025 - Present",
      location: "Current Position",
      type: "Full-time",
      achievements: [
        "Developed secure APIs for IoT hardware devices handling real-time data",
        "Architected Event-Driven Dynamic MQTT Delivery (EDDMD) for instant updates",
        "Designed scalable systems handling 100,000+ devices per instance daily",
        "Deployed solutions on AWS using Docker and GitHub Actions CI/CD",
      ],
      technologies: [
        "Node.js",
        "MQTT",
        "AWS",
        "Docker",
        "IoT",
        "Real-time Systems",
      ],
    },
    {
      company: "Trans-Fi India Pvt Ltd",
      role: "Software Engineer Intern",
      period: "June 2024 - December 2024",
      location: "6 months",
      type: "Internship",
      achievements: [
        "Built automated crypto price fetching system from multiple platforms",
        "Designed REST APIs for secure trading operations",
        "Engineered monitoring systems for payment method optimization",
        "Worked with fintech security protocols and compliance",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Cryptocurrency APIs",
        "FinTech",
      ],
    },
    {
      company: "Freelance Projects",
      role: "Full-Stack Developer & DevOps",
      period: "2020 - Present",
      location: "Remote / Client Projects",
      type: "Freelance",
      achievements: [
        "Completed 10+ projects from design to deployment",
        "Deployed 20+ websites and web applications",
        "Started with static sites and scaled to fully dynamic applications",
        "Handled full lifecycle: UI/UX design, development, DevOps, and deployment",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Docker",
        "AWS",
        "CI/CD",
      ],
    },
  ];

  const education = {
    degree: "B.E. in Computer Science and Engineering",
    institution: "AMC Engineering College",
    achievements: [
      "Participated in inter-college project competitions",
      "Developed innovative projects including KissanBazaar and Car Profile APIs",
      "Strong foundation in computer science fundamentals",
    ],
  };

  return (
    <div className="section">
      <Helmet>
        <title>
          Experience | Manoj Gowda - Full Stack Developer, MERN Specialist &
          DevOps Engineer
        </title>
        <meta
          name="description"
          content="Discover Manoj Gowda's professional experience as a Full Stack Developer and DevOps Engineer. Skilled in MERN stack, JavaScript, IoT systems, fintech development, and cloud solutions with hands-on project delivery."
        />
        <meta
          name="keywords"
          content="
      Manoj Gowda, Experience Manoj Gowda, Manoj Gowda developer experience, 
      Full Stack Developer experience, DevOps Engineer experience, MERN stack projects, 
      JavaScript developer, React.js developer, Node.js developer, MongoDB, 
      IoT developer experience, fintech developer, software engineer Bengaluru, 
      cloud solutions engineer, portfolio experience Manoj Gowda, manojgowda.in
    "
        />
        <meta name="author" content="Manoj Gowda" />
        <link rel="canonical" href="https://manojgowda.in/experience" />

        {/* Open Graph (for LinkedIn/FB/WhatsApp sharing) */}
        <meta
          property="og:title"
          content="Manoj Gowda | Experience - Full Stack Developer & DevOps Engineer"
        />
        <meta
          property="og:description"
          content="Explore Manoj Gowda's journey as a Full Stack Developer and DevOps Engineer. Skilled in MERN, IoT, fintech, and cloud-based software development."
        />
        <meta property="og:url" content="https://manojgowda.in/experience" />
        <meta property="og:type" content="website" />

        {/* Twitter Card (for better preview on X/Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Experience | Manoj Gowda - Full Stack Developer & DevOps Engineer"
        />
        <meta
          name="twitter:description"
          content="View the professional experience of Manoj Gowda, a developer specializing in MERN stack, DevOps, IoT, fintech, and cloud solutions."
        />
      </Helmet>

      <div className="container">
        <div className="fade-in">
          <div className="section-header">
            <h1 className="section-title">
              💼 <span className="gradient-text">Experience</span>
            </h1>
            <p className="section-subtitle">
              My professional journey in software development
            </p>
          </div>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                </div>
                <div className="timeline-content card">
                  <div className="experience-header">
                    <div className="experience-main">
                      <h3 className="experience-role">{exp.role}</h3>
                      <h4 className="experience-company gradient-text">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="experience-meta">
                      <span className="experience-period">{exp.period}</span>
                      <span
                        className={`experience-type ${exp.type.toLowerCase()}`}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="experience-achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="experience-technologies">
                    <h5>Technologies Used:</h5>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="education-section">
            <h2 className="section-title">
              🎓 <span className="gradient-text">Education</span>
            </h2>
            <div className="card">
              <div className="education-header">
                <h3 className="education-degree">{education.degree}</h3>
                <h4 className="education-institution gradient-text">
                  {education.institution}
                </h4>
              </div>
              <div className="education-achievements">
                <h5>Highlights:</h5>
                <ul>
                  {education.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
