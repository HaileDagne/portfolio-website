import React, { useState, useEffect } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navigation ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection("hero")}>
          <div className="logo-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span>Haile</span>
        </div>

        <div className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <a
            href="#hero"
            onClick={() => scrollToSection("hero")}
            className={`nav-link ${activeSection === "hero" ? "active" : ""}`}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => scrollToSection("about")}
            className={`nav-link ${activeSection === "about" ? "active" : ""}`}
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => scrollToSection("skills")}
            className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => scrollToSection("projects")}
            className={`nav-link ${
              activeSection === "projects" ? "active" : ""
            }`}
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={() => scrollToSection("experience")}
            className={`nav-link ${
              activeSection === "experience" ? "active" : ""
            }`}
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={() => scrollToSection("contact")}
            className={`nav-link ${
              activeSection === "contact" ? "active" : ""
            }`}
          >
            Contact
          </a>
        </div>

        <div
          className={`nav-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
