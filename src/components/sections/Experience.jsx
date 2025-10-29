import React from "react";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Full-stack Developer specializing in building end-to-end web applications using React for frontend and Node.js/Express for backend. Develops responsive user interfaces, RESTful APIs, and efficient database solutions with MySql/MSSQL while ensuring seamless integration between client and server. Collaborates with cross-functional teams to deliver scalable, secure applications while maintaining code quality through testing, optimization, and industry best practices.",
    },
    {
      title: "Backend Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description:
        "Backend Developer specializing in designing and building scalable server-side applications and RESTful APIs. Develops efficient database solutions, implements business logic, and ensures application security and performance optimization. Collaborates with cross-functional teams to deliver reliable systems while maintaining code quality through testing and best practices.",
    },
    {
      title: "Frontend Developer",
      company: "Run Z Code Inc.",
      period: "2019 - 2020",
      description:
        "Frontend Developer specializing in building responsive and intuitive user interfaces using React. Develops reusable components with modern JavaScript manages application state, and optimizes performance for seamless user experiences. Collaborates with designers and backend developers to implement pixel-perfect designs while ensuring cross-browser compatibility, accessibility standards, and code quality through testing and best practices.",
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="period">{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
