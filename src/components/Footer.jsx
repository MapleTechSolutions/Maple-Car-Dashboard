import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>CONNECT</h3>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="#inventory">Inventory</a></li>
            <li><a href="#finance">Finance</a></li>
            <li><a href="#trade-in">Trade/Sell Estimate</a></li>
            <li><a href="#calculator">Payment Calculator</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>OUR HOURS</h3>
          <p>Monday - Friday: 9:30 AM to 6:00 PM</p>
          <p>Saturday: 9:30 AM to 6:00 PM</p>
          <p>Sunday: 10:00 AM to 5:00 PM</p>
        </div>

        <div className="footer-section">
          <h3>OUR CONTACTS</h3>
          <p>5707 4 St SE, Calgary, AB T2H 1K8</p>
          <p>Sales: <a href="tel:403-888-0453">403-888-0453</a></p>
          <p>Text: <a href="sms:403-479-4473">403-479-4473</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Happy Corner Auto. All rights reserved. | 
          <a href="#privacy">Privacy Policy</a> | 
          <a href="#terms">Terms & Conditions</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
