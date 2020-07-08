import React from 'react';
import SideNav from './SideNav';

const Contact = () => {
  const closeSideNav = () => {
    document.querySelector('#side-nav').classList.remove('toggled');
  }
  
  return (
    <section id="contact" className="showcase contact">
      <SideNav />
      <div className="left-side-secondary"></div>
      <div className="right-side-secondary" onClick={closeSideNav}>
        <div className="container">
          <div className="contact-left">
            <h1>Contact Me</h1>
            <div className="contact-bottom-two">
              <div className="contact-group">
                <h3>Phone</h3>
                <div>
                  <i className="fas fa-phone"></i>
                  <p>(843) 469-0093</p>
                </div>
              </div>
              <div className="contact-group">
                <h3>Email</h3>
                <div>
                  <i className="fas fa-envelope"></i>
                  <p>simplicitly.dev@gmail.com</p>
                </div>
              </div>
              <div className="contact-group">
                <h3>Socials</h3>
                <div>
                  <ul className="icon-list">
                    <li><a href="https://github.com/simplicitly" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                    <li><a href="https://linkedin.com/in/will-koste" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="https://facebook.com/will.koste" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/simplicitly1" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#y" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </section>
  )
}

export default Contact;