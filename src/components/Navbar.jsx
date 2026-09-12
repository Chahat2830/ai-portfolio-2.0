import React, { useState } from 'react';
import { Menu, X, Eye } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((previousState) => !previousState);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Works locally and on GitHub Pages
  // Example:
  // Local: /resume.pdf
  // GitHub Pages: /ai-portfolio-2.0/resume.pdf
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Research', href: '#research' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <a
          href="#home"
          className="nav-logo"
          onClick={closeMenu}
        >
          <span className="nav-logo-badge">AI</span>
          <span>CHAHAT</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="nav-right-actions">
          {/* View CV Button */}
          <a
            href={resumeUrl}
            target="_self"
            className="btn-primary resume-btn"
            aria-label="View Chahat Kumar CV"
          >
            <Eye size={16} />
            <span>View CV</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile View CV Button */}
          <a
            href={resumeUrl}
            target="_self"
            className="btn-primary mobile-cv-btn"
            onClick={closeMenu}
            aria-label="View Chahat Kumar CV"
          >
            <Eye size={17} />
            <span>View CV</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;