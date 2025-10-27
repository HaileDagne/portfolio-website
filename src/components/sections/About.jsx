import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate developer crafting exceptional digital experiences
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>
                I'm a dedicated developer who loves turning ideas into reality
              </h3>
              <p>
                With over 3 years of experience in web development, I specialize
                in creating responsive, user-friendly websites and applications.
                I have a strong foundation in both frontend and backend
                technologies, and I'm always eager to learn new technologies and
                frameworks.
              </p>
            </div>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">🚀</div>
                <div className="feature-content">
                  <h4>Fast Development</h4>
                  <p>Quick turnaround times without compromising quality</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎨</div>
                <div className="feature-content">
                  <h4>Creative Solutions</h4>
                  <p>Unique approaches to complex problems</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🤝</div>
                <div className="feature-content">
                  <h4>Collaborative</h4>
                  <p>Great at working with teams and clients</p>
                </div>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">25+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="visual-container">
              <div className="main-image">
                <div className="image-placeholder">
                  <div className="placeholder-icon">👨‍💻</div>
                </div>
                <div className="image-glow"></div>
              </div>

              <div className="floating-icons">
                <div className="floating-icon icon-1">💻</div>
                <div className="floating-icon icon-2">⚡</div>
                <div className="floating-icon icon-3">🎯</div>
                <div className="floating-icon icon-4">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
