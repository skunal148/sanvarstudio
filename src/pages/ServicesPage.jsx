import React from 'react';

const ServicesPage = () => {
  const services = [
    {
      imgSrc: "/thumbnails/playable-ad-thumbnail.png",
      imgAlt: "Playable Ad Development Thumbnail",
      title: "Playable Ads",
      description: "We specialize in creating captivating and high-performance playable ads that drive user engagement and conversions."
    },
    {
      imgSrc: "/thumbnails/html5-game-thumbnail.jpg",
      imgAlt: "HTML5 Game Development Thumbnail",
      title: "HTML5 Games",
      description: "From concept to launch, we build engaging HTML5 games that run seamlessly across desktop and mobile browsers."
    },
    {
      imgSrc: "/thumbnails/3d-game-dev.jpg",
      imgAlt: "3D Game Development Thumbnail",
      title: "3D Games",
      description: "We create immersive and high-performance 3D games for various platforms."
    },
    {
      imgSrc: "/thumbnails/web-ar-exp.jpg",
      imgAlt: "Web AR Experiences Thumbnail",
      title: "Web AR Experiences",
      description: "We develop augmented reality solutions accessible directly through web browsers"
    },
    {
      imgSrc: "/thumbnails/gameDevelopment.png",
      imgAlt: "Web Development Thumbnail",
      title: "Web Development",
      description: "Our web development services focus on creating responsive, high-performing, and user-friendly websites tailored to your brand."
    }
  ];

  return (
    <section id="services" className="content-section page-padding"> {/* */}
      <h2>Our Services</h2>
      <div className="services-list"> {/* This will become the 2x2 grid container */}
        {services.map((service, index) => (
          <div key={index} className="service-item"> {/* Each item in the grid */}
            <img
              src={service.imgSrc} // Replace with your actual thumbnail URL
              alt={service.imgAlt}
              className="service-item-thumbnail"
            />
            <div className="service-item-text-content"> {/* Wrapper for text */}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;