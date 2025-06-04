import React from 'react';

// Optional: import './ServicesPage.css'; // If you create a separate CSS file

const ServicesPage = () => {
  return (
    <section id="services" className="content-section page-padding">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service-item">
          <img
            src="thumbnails/cryptoBonanza.jpeg" // Replace with your actual thumbnail URL
            alt="Playable Ad Development Thumbnail"
            className="service-item-thumbnail"
          />
          <h3>Playable Ads</h3>
          <p>
            We specialize in creating captivating and high-performance playable ads
            that drive user engagement and conversions. Our ads are designed to be
            lightweight, interactive, and optimized for all major platforms.
          </p>
        </div>
        <div className="service-item">
          <img
            src="thumbnails/willysEdge.png" // Replace with your actual thumbnail URL
            alt="HTML5 Game Development Thumbnail"
            className="service-item-thumbnail"
          />
          <h3>HTML5 Games</h3>
          <p>
            From concept to launch, we build engaging HTML5 games that run seamlessly
            across desktop and mobile browsers. Whether you need a branded mini-game,
            an educational tool, or an original IP, we bring your vision to life.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default ServicesPage;