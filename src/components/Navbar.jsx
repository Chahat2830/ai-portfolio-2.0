import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Research', href: '#research' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' }
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
          <span className="nav-logo-badge">
            AI
          </span>

          <span>
            CHAHAT
          </span>
        </a>


        {/* Desktop Navigation */}
        <nav className="nav-links desktop-nav">

          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`nav-link ${
                index === 0 ? 'active' : ''
              }`}
            >
              {link.label}
            </a>
          ))}

        </nav>


        {/* Right Actions */}
        <div className="nav-right-actions">

          <a
            href="/resume.pdf"
            download="Chahat-Kumar-Resume.pdf"
            className="btn-primary resume-btn"
          >
            <Download size={15} />
            Download CV
          </a>


          {/* Mobile Menu Button */}
          <button
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
      <div
        className={`mobile-menu ${
          isOpen ? 'open' : ''
        }`}
      >

        <nav className="mobile-nav-links">

          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}


          {/* Mobile CV Button */}
          <a
            href="/resume.pdf"
            download="Chahat-Kumar-Resume.pdf"
            className="btn-primary mobile-cv-btn"
            onClick={closeMenu}
          >
            <Download size={16} />
            Download CV
          </a>

        </nav>

      </div>

    </header>
  );
};

export default Navbar;