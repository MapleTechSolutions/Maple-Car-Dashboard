import React from 'react'
import './BodyStyleSearch.css'

function BodyStyleSearch() {
  const bodyStyles = [
    { name: 'Sedan', image: '/sedan.jpg' },
    { name: 'Coupe', image: '/coupe.png' },
    { name: 'Hatchback', image: '/Hatchback.jpg' },
    { name: 'SUV', image: '/suv.jpg' },
    { name: 'Minivan/Van', image: '/minivan.jpg' },
    { name: 'Truck/Commercial', image: '/Truck.jpg' }
  ]

  return (
    <section className="body-style-search">
      <h2>SEARCH BY BODYSTYLE</h2>
      <div className="body-style-grid">
        {bodyStyles.map((style) => (
          <div 
            key={style.name} 
            className="body-style-card"
            style={{ '--img-url': `url(${style.image})` }}
          >
            <div className="body-style-overlay"></div>
            <p className="body-style-name">{style.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BodyStyleSearch
