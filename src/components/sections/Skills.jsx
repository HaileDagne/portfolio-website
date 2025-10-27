import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      color: "blue",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 95, icon: "🟨" },
        { name: "HTML5", level: 95, icon: "🌐" },
        { name: "CSS3", level: 90, icon: "🎨" },
        // { name: "TypeScript", level: 85, icon: "🔷" },
        // { name: "Vue.js", level: 80, icon: "💚" },
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      color: "teal",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Python", level: 70, icon: "🐍" },
        { name: "Express.js", level: 85, icon: "🚀" },
        { name: "MySQL", level: 75, icon: "🗄️" },
        // { name: "MongoDB", level: 70, icon: "🍃" },
        // { name: "PostgreSQL", level: 65, icon: "🐘" },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      color: "gold",
      skills: [
        { name: "Git", level: 90, icon: "📝" },
        // { name: "Docker", level: 70, icon: "🐳" },
        { name: "AWS", level: 65, icon: "☁️" },
        // { name: "Figma", level: 85, icon: "🎨" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "Linux", level: 75, icon: "🐧" },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="section-subtitle">Technologies I work with and love</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>

                    <div className="skill-bar">
                      <div
                        className={`skill-progress ${category.color}`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="progress-shine"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <div className="summary-icon">🚀</div>
            <div className="summary-content">
              <h4>Always Learning</h4>
              <p>
                Continuously updating my skills with the latest technologies
              </p>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">⚡</div>
            <div className="summary-content">
              <h4>Fast Adaptation</h4>
              <p>Quick to learn and implement new frameworks and tools</p>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🎯</div>
            <div className="summary-content">
              <h4>Problem Solving</h4>
              <p>Strong analytical skills to tackle complex challenges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
