import React, { useState } from 'react'
import './GetDirections.css'

function GetDirections() {
  const [startAddress, setStartAddress] = useState('')

  const handleGetDirections = () => {
    if (startAddress.trim()) {
      const googleMapsUrl = `https://www.google.com/maps/dir/${encodeURIComponent(startAddress)}/5707+4+St+SE+Calgary+AB+T2H+1K8`
      window.open(googleMapsUrl, '_blank')
    }
  }

  return (
    <section className="get-directions">
      <div className="directions-container">
        {/* Map Section */}
        <div className="map-section">
          <iframe
            title="Happy Corner Auto Location"
            width="100%"
            height="600"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2510.8674859851087!2d-114.054538!3d51.003785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716d3f3f3f3f3f%3A0x1234567890abcdef!2sHappy%20Corner%20Auto!5e0!3m2!1sen!2sca!4v1234567890123"
          ></iframe>

          {/* Directions Card Overlay */}
          <div className="directions-card-overlay">
            <h3>GET DIRECTIONS TO<br />HAPPY CORNER AUTO LTD.</h3>
            <div className="directions-input-group">
              <input
                type="text"
                placeholder="Enter your starting address"
                value={startAddress}
                onChange={(e) => setStartAddress(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleGetDirections()}
              />
              <button onClick={handleGetDirections}>
                <i>🔍</i>
              </button>
            </div>
            
            <div className="directions-info">
              <div className="info-block">
                <h4>ADDRESS</h4>
                <p>5707 4 St SE<br />Calgary, AB T2H 1K8<br />Canada</p>
              </div>
              <div className="info-block">
                <h4>PHONE</h4>
                <p><a href="tel:403-888-0453">Sales: 403-888-0453</a><br /><a href="sms:403-479-4473">Text: (403) 479-4473</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetDirections
