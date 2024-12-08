import React from 'react';
import "../app/style/footer.css"

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="footer-container">
          <a className="footer-logo">
            <span className="footer-logo-text">Hamza Shafi</span>
          </a>
          <p className="footer-copy">
            © 2024 Hamza Shafi
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
