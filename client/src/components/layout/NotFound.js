import React from 'react';
import {Link} from 'react-router-dom';
import SideNav from './SideNav';
import graphic from '../../images/dalmatian.png'

const NotFound = () => {
  const closeSideNav = () => {
    document.querySelector('#side-nav').classList.remove('toggled');
  }
  
  return (
    <div>
      <section id="notfound" className="showcase notfound">
        <SideNav />
        <div className="left-side-secondary"></div>
        <div className="right-side-secondary" onClick={closeSideNav}>
          <div className="container">
            <h1>404</h1>
            <p>Sorry, I can't find the dang page.</p>
            <Link to="/" className="notfound-btn">Go Back</Link>
            <div className="white-circle"></div>
          </div>
          <div className="other-div">
            <img className="lost-graphic" src={graphic} alt="Page Not FounDalmatian" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFound;