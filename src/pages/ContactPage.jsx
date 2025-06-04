import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(false);
    setSubmitError('');
    // --- Backend integration / Formspree fetch call would go here ---
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    // setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form for actual use
  };

  return (
    <section id="contact" className="content-section page-padding">
      <h2>Contact Us</h2>
      <p>
        Have a project in mind or just want to say hi? Fill out the form below,
        and I'll get back to you as soon as possible.
      </p>

      {isSubmitted ? (
        <div className="form-submission-success">
          Thank you for your message! I'll be in touch shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          {/* New wrapper for side-by-side fields */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div> {/* End of form-row */}

          {/* Subject field - remains full width */}
          <div className="form-group">
            <label htmlFor="subject">Subject (Optional)</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          {/* Message field - remains full width */}
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          {submitError && <div className="form-submission-error">{submitError}</div>}
          <button type="submit" className="button-primary form-submit-button">
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactPage;