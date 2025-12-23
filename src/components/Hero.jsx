import React, { useState } from 'react'
import './Hero.css'

function Hero() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = () => {
    console.log('Searching for:', searchQuery)
  }

  return (
    <section className="hero" style={{ backgroundImage: 'url(/../../images/Home_page_img.jpg)' }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-subtitle">CANADA'S BEST</p>
          <h1>USED CAR DEALERSHIP</h1>
          <p className="hero-tagline">We not only sell cars we build relationships</p>
        </div>

        <div className="hero-search-box">
          <input 
            type="text" 
            placeholder="Search for Any Makes or Model"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button onClick={handleSearch}>SEARCH</button>
        </div>

        <div className="hero-buttons">
          <button className="btn btn-primary">VIEW INVENTORY</button>
          <button className="btn btn-secondary">GET APPROVED</button>
          <button className="btn btn-secondary">TRADE/SELL ESTIMATE</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
