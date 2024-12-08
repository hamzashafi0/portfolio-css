import React from 'react';
import "../app/style/contect.css"

const Contact = () => {
  return (
    <div id='contact'>
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-map-container">
            <iframe
              width="100%"
              height="100%"
              className="contact-map"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14484.506873346303!2d67.09844910101395!3d24.82533974723211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b9b06208e57%3A0x7c44546663f83f73!2sAllah%20Wala%20Town%20Korangi%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731143838834!5m2!1sen!2s"
              style={{ filter: " contrast(1.2) opacity(0.4)" }}
            />
            <div className="contact-info">
              <div className="contact-info-item">
                <h2 className="contact-info-title">ADDRESS</h2>
                <p>Korangi Crossing Karachi.</p>
              </div>
              <div className="contact-info-item">
                <h2 className="contact-info-title">EMAIL</h2>
                <a className="contact-info-email">ShafiHamza459@gmail.com</a>
                <h2 className="contact-info-title">PHONE</h2>
                <p>0311-2249019</p>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <h2 className="contact-form-title">Contact</h2>
            <form>
              <div className="contact-form-field">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="contact-form-input" />
              </div>
              <div className="contact-form-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="contact-form-input" />
              </div>
              <div className="contact-form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" className="contact-form-textarea" />
              </div>
              <button className="contact-form-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
