import classes from "./ContactForm.module.css";
import { useState } from "react";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className={classes.container}>
      {/* <h1>Contact Us</h1> */}
      <div className={classes.contentWrapper}>
        {/* Google Map Block */}
        <div className={classes.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14739.252485807447!2d72.9244486!3d22.5486722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4fd5e8f586f9%3A0x8d57df819c971d4d!2sAnand%20Overseas!5e0!3m2!1sen!2sin!4v1727295046708!5m2!1sen!2sin"
            width="500"
            height="350"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className={classes.contactInfo}>
            <p>
              <strong>Contact Address:</strong>
              <br />
              Anand Overseas
              <br />
              304, Radha Keshav,
              <br />
              Opp. Home Science College, Patel Society,
              <br />
              Mota Bazaar, Vallabh Vidyanagar
              <br />
              Anand, Gujarat 388120
            </p>
            <p>
              <strong>Phone:</strong> (+091)-XXX-XXXX
            </p>
            <p>
              <strong>Email:</strong> info@xyz.com
            </p>
          </div>
        </div>

        {/* Contact Info and Form */}
        <div className={classes.contactFormBlock}>
          <form onSubmit={handleSubmit} className={classes.form}>
            <h3>If You Have Any Query</h3>
            <div className={classes.inputGroup}>
              <label htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={classes.inputGroup}>
              <label htmlFor="email">Your Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={classes.inputGroup}>
              <label htmlFor="phone">Phone *</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className={classes.inputGroup}>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className={classes.submitButton}>
              Send Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
