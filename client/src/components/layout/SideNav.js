import React from 'react';
import {NavLink} from 'react-router-dom';

const SideNav = () => {
  return (
    <section id="side-nav" className="side-nav">
      <ul>
        <li><NavLink activeClassName="current" exact to="/">Home</NavLink></li>
        <li><NavLink activeClassName="current" exact to="/contact">Contact</NavLink></li>
        <li><NavLink activeClassName="current" exact to="/projects">Projects</NavLink></li>
        <li><NavLink activeClassName="current" exact to="/about">About</NavLink></li>
      </ul>
    </section>
  )
}

export default SideNav;