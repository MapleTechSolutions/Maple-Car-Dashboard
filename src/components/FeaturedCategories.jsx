import React from 'react'
import './FeaturedCategories.css'

function FeaturedCategories() {
  const categories = [
    {
      id: 1,
      title: 'Used Inventory',
      image: '/../../images/used_inventory.jpg',
    },
    {
      id: 2,
      title: 'Trade Sell Estimate',
      image: '/../../images/Trade_sell_estimate.jpg',
    },
    {
      id: 3,
      title: 'Apply Now',
      image: '/../../images/Apply_now.jpg',
    }
  ]

  return (
    <section className="featured-categories">
      <div className="categories-grid">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="category-card"
            style={{ backgroundImage: `url(${category.image})` }}
          >
            <div className="category-overlay"></div>
            <div className="category-content">
              <h3>{category.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedCategories
