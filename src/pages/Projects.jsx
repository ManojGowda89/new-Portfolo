const Projects = () => {
  const projects = [
    {
      name: "walletExpress",
      description: "Web App for generating random crypto wallet addresses - Lightweight tool that generates dummy wallet addresses for more than 10 cryptocurrencies, tailored for Web3 developers and testers.",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "https://walletexpress.manojgowda.in",
      technologies: ["React", "JavaScript", "Web3", "Crypto APIs"],
      status: "Live",
      type: "Web App"
    },
    {
      name: "Cobit",
      description: "Code snippet manager with dual interfaces - Platform for storing, organizing and reusing code snippets with both a web app and CLI tool, improving developer productivity.",
      image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "https://cobit.manojgowda.in",
      technologies: ["React", "Node.js", "MongoDB", "CLI Tools"],
      status: "Live",
      type: "Web App & CLI"
    },
    {
      name: "SkoCloud",
      description: "Personal cloud storage solution - Google Drive alternative to securely store, download, and retrieve files including photos, videos, and documents across Android and web platforms.",
      image: "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "Node.js", "AWS S3", "Express"],
      status: "In Development",
      type: "Mobile & Web App"
    },
    {
      name: "VMarg",
      description: "B2B IoT product deployed on AWS - Comprehensive IoT solution with real-time data visualization and logging, supporting 100,000+ devices per instance with Docker-based deployment.",
      image: "https://firebasestorage.googleapis.com/v0/b/projects-4f71b.appspot.com/o/Skoegle_01.png?alt=media&token=db2e0958-e545-4901-a060-3d98929326a3&auto=compress&cs=tinysrgb&w=600",
      technologies: ["Node.js", "MQTT", "AWS", "Docker", "IoT"],
      liveUrl: "https://vmarg.skoegle.com",
      status: "Production",
      type: "IoT Platform"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return '#10b981';
      case 'Production': return '#2F81F7';
      case 'In Development': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  return (
    <div className="section">
      <div className="container">
        <div className="fade-in">
          <div className="section-header">
            <h1 className="section-title">
              🏆 <span className="gradient-text">Projects</span>
            </h1>
            <p className="section-subtitle">
              Showcase of applications I've built and deployed
            </p>
          </div>

          <div className="projects-grid grid grid-2">
            {projects.map((project, index) => (
              <div key={index} className="project-card card">
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <span 
                      className="project-status"
                      style={{ backgroundColor: getStatusColor(project.status) }}
                    >
                      {project.status}
                    </span>
                    <span className="project-type">{project.type}</span>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-name gradient-text">{project.name}</h3>
                  </div>
                  
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        View Live
                      </a>
                    )}
                    <button className="btn btn-secondary">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="achievement-stats">
            <div className="stats-grid grid grid-3">
              <div className="stat-card card">
                <div className="stat-icon">🚀</div>
                <h3 className="stat-number gradient-text">10+</h3>
                <p className="stat-label">Projects Delivered</p>
              </div>
              <div className="stat-card card">
                <div className="stat-icon">👥</div>
                <h3 className="stat-number gradient-text">100K+</h3>
                <p className="stat-label">Users Served</p>
              </div>
              <div className="stat-card card">
                <div className="stat-icon">⚡</div>
                <h3 className="stat-number gradient-text">99.9%</h3>
                <p className="stat-label">Uptime Achieved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;