import React from 'react';

const ContactPageForm = () => {
  return (
    <div className="form-container">
      <form id="contact-form" className="contact-form">
        <div className="form-group">
          <label htmlFor="name" id="name" className="name-field">Name</label>
          <input type="text" id="name-input" className="name-input" />
        </div>
        <div className="form-group">
          <label htmlFor="email" id="email" className="email-field">Email</label>
          <input type="text" id="email-input" className="email-input" />
        </div>
        <input type="submit" value="Submit" className="contact-submit" />
      </form>
    </div>
  )
}

export default ContactPageForm;