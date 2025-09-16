import { Helmet } from "react-helmet-async";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "JavaScript", color: "#F7DF1E" },
        { name: "TypeScript", color: "#007ACC" },
        { name: "React", color: "#61DAFB" },
        { name: "React Native", color: "#61DAFB" },
        { name: "Next.js", color: "#000000" }
      ]
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", color: "#339933" },
        { name: "Express.js", color: "#000000" },
        { name: "Python", color: "#3776AB" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", color: "#4EA94B" },
        { name: "PostgreSQL", color: "#316192" },
        { name: "Firebase", color: "#FFCA28" }
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker", color: "#2CA5E0" },
        { name: "AWS", color: "#232F3E" },
        { name: "Kubernetes", color: "#326CE5" },
        { name: "GitHub Actions", color: "#2088FF" },
        { name: "Vercel", color: "#000000" }
      ]
    }
  ];

  const npmPackages = [
    {
      name: "mbqueue",
      description:
        "A lightweight and efficient message queue system for Node.js applications. Simplifies async tasks and background processing.",
      version: "1.0.0",
      downloads: "500+",
      link: "https://www.npmjs.com/package/mbqueue"
    },
    {
      name: "@manoj2002/cobit",
      description:
        "A powerful CLI tool and web app for storing, organizing, and reusing code snippets across projects.",
      version: "2.1.0",
      downloads: "1.2K+",
      link: "https://www.npmjs.com/package/@manoj2002/cobit"
    }
  ];

  return (
    <div className="section">
      <Helmet>
        <title>Skills & Expertise | Manoj Gowda</title>
        <meta
          name="description"
          content="Explore Manoj Gowda's technical skills in frontend, backend, databases, DevOps, and cloud. Includes open-source npm packages like mbqueue and cobit."
        />
        <meta
          name="keywords"
          content="Manoj Gowda, skills, expertise, JavaScript, React, Node.js, MERN stack, developer, full stack developer, mbqueue, cobit, npm packages, DevOps, Docker, AWS"
        />
        <meta name="author" content="Manoj Gowda" />
      </Helmet>

      <div className="container">
        <div className="fade-in">
          <div className="section-header">
            <h1 className="section-title">
              🛠️ <span className="gradient-text">Skills & Expertise</span>
            </h1>
            <p className="section-subtitle">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="skills-grid grid grid-2">
            {skillCategories.map((category, index) => (
              <div key={index} className="card">
                <h3 className="card-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="skill-badge"
                      style={{
                        "--skill-color": skill.color,
                        animationDelay: `${skillIndex * 0.1}s`
                      }}
                    >
                      <div
                        className="skill-dot"
                        style={{ backgroundColor: skill.color }}
                      ></div>
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="npm-packages-section">
            <h2 className="section-title">
              📦 <span className="gradient-text">NPM Packages</span>
            </h2>
            <div className="packages-grid grid grid-2">
              {npmPackages.map((pkg, index) => (
                <div key={index} className="card package-card">
                  <div className="package-header">
                    <h3 className="package-name">{pkg.name}</h3>
                    <div className="package-stats">
                      <span className="package-version">v{pkg.version}</span>
                      <span className="package-downloads">
                        {pkg.downloads} downloads
                      </span>
                    </div>
                  </div>
                  <p className="package-description">{pkg.description}</p>
                  <div className="package-actions">
                    <a
                      href={pkg.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View on NPM
                    </a>
                    <code className="install-cmd">npm i {pkg.name}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
