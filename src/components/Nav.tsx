import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX, HiCode, HiLightningBolt, HiInformationCircle, HiBriefcase, HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { companyNavLinks, companyProfile } from "../data/company";

const Nav: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const iconByKey = {
    home: HiCode,
    projects: HiBriefcase,
    hackend: HiLightningBolt,
    about: HiInformationCircle,
    experience: HiBriefcase,
    contact: HiMail,
  };

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="portfolio-nav" ref={navRef}>
      <div className="nav-content">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          {companyProfile.shortName}
        </Link>

        <button
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        <ul className={`nav-links ${isMenuOpen ? "nav-open" : ""}`}>
          {companyNavLinks.map((link) => {
            const Icon = iconByKey[link.iconKey];
            const isActive = location.pathname === "/" && link.path.startsWith("#")
              ? location.hash === link.path
              : location.pathname === link.path;

            return (
              <li key={link.path}>
                <a href={link.path} className={isActive ? "active" : ""} onClick={closeMenu}>
                  <Icon className="nav-icon" />
                  <span>{link.name}</span>
                </a>
              </li>
            );
          })}

          {companyProfile.github && (
            <li className="nav-social-item">
              <a href={companyProfile.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub" onClick={closeMenu}>
                <FaGithub />
              </a>
            </li>
          )}

          {companyProfile.linkedin && (
            <li className="nav-social-item">
              <a href={companyProfile.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" onClick={closeMenu}>
                <FaLinkedin />
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
