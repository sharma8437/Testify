import React from 'react';
import "../Styles/Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                
                {/* Logo Section */}
                <div className="footer-logo">
                    <div className="logo-icon">
                        <h2>T</h2>
                    </div>
                    <h3>Testify</h3>
                </div>

                {/* Navigation Links */}
                <div className="footer-section">
                    <h4>Explore</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About us</a></li>
                        <li><a href="#support">Support</a></li>
                    </ul>
                </div>

                {/* Company Links */}
                <div className="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#terms">Terms & Conditions</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#contact">Contact us</a></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="footer-section">
                    <h4>Get in touch</h4>
                    <p>B-1213 We Work, Andheri 400093</p>
                    <p>+91-8850991017</p>
                    <p>+91-8424833124</p>
                    <p>info@Testify.in</p>
                    <div className="social-icons">
                        <a href="#instagram">📷</a>
                        <a href="#whatsapp">📱</a>
                        <a href="#linkedin">🔗</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Testify. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
