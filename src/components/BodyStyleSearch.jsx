import React from 'react'
import './BodyStyleSearch.css'

function BodyStyleSearch() {
  const bodyStyles = [
    { name: 'Sedan', image: '/../../images/sedan.jpg' },
    { name: 'Coupe', image: '/../../images/coupe.png' },
    { name: 'Hatchback', image: '/../../images/Hatchback.jpg' },
    { name: 'SUV', image: '/../../images/suv.jpg' },
    { name: 'Minivan/Van', image: '/../../images/minivan.jpg' },
    { name: 'Truck/Commercial', image: '/../../images/Truck.jpg' }
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
