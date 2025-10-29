import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Amazon Clone",
      description:
        "E-commerce platform with shopping cart, payment integration, and admin dashboard using MERN stack.",
      technologies: ["React", "Node.js", "MySQL", "Stripe"],
      backgroundImage: "/portfolio-website/images/amazon-clone-bg.jpg",
      githubLink: "https://github.com/HaileDagne/Amazon-clone.git",
      liveLink: "https://hailedagne.github.io/Amazon-clone/",
      featured: true,
    },
    {
      title: "Netflix Clone",
      description:
        "A full-stack Netflix clone with user authentication, movie browsing, and streaming capabilities built with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      backgroundImage: "/portfolio-website/images/netflix-clone-bg.jpg",
      githubLink: "https://github.com/HaileDagne/Netflix-clone-2025.git",
      liveLink: "https://hailedagne.github.io/Netflix-clone-2025/",
      featured: true,
    },
    {
      title: "Q & A Forum",
      description:
        "Community-driven question and answer platform with voting, reputation system, and real-time notifications.",
      technologies: ["React", "Express", "MySQL", "Socket.io"],
      backgroundImage: "/portfolio-website/images/evangadi-forum-bg.jpg",
      githubLink: "https://github.com/HaileDagne/EVANGADI-FORUM.git",
      liveLink: "https://evangadi-forum.norisk4you.com/",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div
                className="project-image"
                style={{
                  backgroundImage: `url(${project.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {project.featured && (
                  <div className="featured-badge">Featured</div>
                )}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-buttons">
                  <a href={project.githubLink} className="btn btn-code">
                    <span className="btn-icon">&lt;/&gt;</span>
                    Code
                  </a>
                  <a href={project.liveLink} className="btn btn-live">
                    <span className="btn-icon">↗</span>
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
