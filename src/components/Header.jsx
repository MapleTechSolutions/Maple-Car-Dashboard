import React from 'react'
import './Header.css'

function Header() {
  return (
    <>
      {/* Top Info Bar */}
      <div className="header-top">
        <div className="header-top-container">
          <div className="contact-info">
            <span className="info-item">
              <i className="icon">📍</i>
              <span>5707 4 St SE, Calgary, AB T2H 1K8</span>
            </span>
            <span className="info-item">
              <i className="icon">📱</i>
              <span>Sales: <a href="tel:403-888-0453">403-888-0453</a></span>
            </span>
            <span className="info-item">
              <i className="icon">💬</i>
              <span>Text Us: <a href="sms:403-479-4473">(403) 479-4473</a></span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <h2>Happy Corner<br /><span>AUTO</span></h2>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="#inventory">INVENTORY</a></li>
              <li><a href="#trade-in">TRADE/SELL ESTIMATE</a></li>
              <li><a href="#finance">FINANCING</a></li>
              <li><a href="#about">ABOUT US</a></li>
              <li><a href="#contact">CONTACT US</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
