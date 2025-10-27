import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Amazon Clone",
      description: "A full-stack e-commerce solution with React and Node.js",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MySQL",
        "Stripe",
        "Firebase",
      ],
      gradient: "linear-gradient(135deg, #ff6b6b, #ffa500)",
    },
    {
      title: "Netflix Clone",
      description: "A collaborative task management application",
      technologies: ["React", "GitHub", "Media query"],
      gradient: "linear-gradient(135deg, #e50914, #221f1f)",
    },
    {
      title: "Evangadi Forum",
      description: "A responsive application with interactive maps",
      technologies: ["React", "Express", "MySQL", "Javascript", "node.js"],
      gradient: "linear-gradient(135deg, #667eea, #764ba2)",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              style={{
                background: project.gradient,
              }}
            >
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
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
