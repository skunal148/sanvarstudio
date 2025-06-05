import React from 'react';

// Replace this with your actual testimonials
const testimonialsData = [
  {
    quote: "Sanvar Studio delivered an outstanding playable ad that exceeded our expectations and significantly boosted our campaign's performance. Their creativity and technical skill are top-notch!",
    name: "Alex Chen",
    titleCompany: "Marketing Manager, Alpha Games"
  },
  {
    quote: "The HTML5 game developed by Sanvar Studio was a huge hit with our audience. They were professional, responsive, and a true pleasure to collaborate with.",
    name: "Maria Rodriguez",
    titleCompany: "Founder, Beta Interactives"
  },
  {
    quote: "We needed a complex Web AR experience, and Sanvar Studio brought our vision to life flawlessly. Their expertise in emerging tech is impressive.",
    name: "Sam Lee",
    titleCompany: "CTO, Gamma Solutions"
  },
  // Add more testimonials
];

const TestimonialsPage = () => {
  return (
    <section id="testimonials" className="content-section page-padding">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <article key={index} className="testimonial-card">
            <blockquote className="testimonial-quote">
              “{testimonial.quote}”
            </blockquote>
            <cite className="testimonial-cite">
              <span className="testimonial-name">{testimonial.name}</span>
              <span className="testimonial-title-company">{testimonial.titleCompany}</span>
            </cite>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsPage;