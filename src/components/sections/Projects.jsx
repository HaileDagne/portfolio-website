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
      image: "/images/amazon-clone-bg.jpg",
    },
    {
      title: "Netflix Clone",
      description: "A collaborative task management application",
      technologies: ["React", "GitHub", "Media query"],
      image: "/images/netflix-clone-bg.jpg",
    },
    {
      title: "Evangadi Forum",
      description: "A responsive application with interactive maps",
      technologies: ["React", "Express", "MySQL", "Javascript", "node.js"],
      image: "/images/evangadi-forum-bg.jpg",
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
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
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
