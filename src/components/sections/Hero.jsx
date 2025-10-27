import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-text">Available for Projects</span>
            </div>
            <h1 className="hero-title">
              <span className="hero-name">Haile</span>
              <span className="hero-subtitle">Full Stack Developer</span>
            </h1>
            <p className="hero-description">
              I craft exceptional digital experiences that combine beautiful
              design with powerful functionality. Specializing in modern web
              technologies and user-centered design.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
            <div className="hero-actions">
              <button
                className="btn btn-primary"
                onClick={() => {
                  const element = document.getElementById("projects");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                View My Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="btn btn-secondary">
                Get In Touch
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 12H16M12 8V16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container">
              <div className="hero-image">
                <div className="image-placeholder">
                  <div className="placeholder-icon">👨‍💻</div>
                </div>
                <div className="image-decoration"></div>
              </div>
              <div className="floating-elements">
                <div className="floating-card card-1">
                  <div className="card-icon">⚛️</div>
                  <span>React</span>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">🟨</div>
                  <span>JavaScript</span>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">🎨</div>
                  <span>UI/UX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
