import React from "react";
import "./Footer.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">Copyright©2023 - Devsafío</p>
        <div className="footer-icons">
          <a href="https://www.linkedin.com/company/devsafio/?originalSubdomain=cl" target="blank" className="icon">
            <FaLinkedin />
          </a>
          <a href="" target="blank" className="icon">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
