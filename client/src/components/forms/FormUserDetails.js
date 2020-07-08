import React from 'react';

const FormUserDetails = ({onChange}) => {
  return (
    <div class="form-container sign-in-container">
      <form>
        <h1>Contact</h1>
        <label htmlFor="name">Name *</label>
        <input type="name" name="name" id="name" onChange={onChange} required />
        <label htmlFor="email">Email *</label>
        <input type="email" name="email" id="email" onChange={onChange} required />
        <label htmlFor="phone">Phone *</label>
        <input type="text" name="phone" id="phone" onChange={onChange} required />
        <label htmlFor="message">Message *</label>
        <textarea name="message" id="message-area" required cols="30" rows="10" onChange={onChange} ></textarea>
      </form>
    </div>
  )
}

export default FormUserDetails;