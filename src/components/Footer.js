import React from 'react';
import './styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid footer-content">
        <div className="footer-section">
          <h5>Bizimlə qalın</h5>
          <div className="social-icons">
            <a href="#facebook" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#instagram" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#linkedin" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h5>Müştəri xidmətləri</h5>
          <ul>
            <li><a href="/brands">Brendlər</a></li>
      
            <li><a href="/certficates">Sertifikatlar</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Haqqımızda</h5>
          <ul>
            <li><a href="#about">Haqqımızda</a></li>
            <li><a href="#news">Xəbərlər</a></li>
            <li><a href="#contact-us">Bizimlə əlaqə</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Bizimlə əlaqə</h5>
          <ul>
            <li><i className="fas fa-envelope"></i> info@hunmotors.com</li>
            <li><i className="fas fa-phone"></i> (+99450) 123 45 67</li>
            <li><i className="fas fa-map-marker-alt"></i> Mekan</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2024 © HUN-MOTORS</p>
      </div>
    </footer>
  );
};

export default Footer;
