import React from "react";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { companyProfile } from "../data/company";

const Footer: React.FC = () => {
  const email = companyProfile.email;
  const github = companyProfile.github;
  const linkedin = companyProfile.linkedin;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <div className="footer-branding">
          <p className="footer-name">{companyProfile.name}</p>
          <p className="footer-role">{companyProfile.role}</p>
        </div>
        <div className="footer-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
              <span>GitHub</span>
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`}>
              <HiMail />
              <span>Email</span>
            </a>
          )}
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; {currentYear}</span>
        <span>SM DATA & TECH</span>
      </div>
    </footer>
  );
};

export default Footer;
