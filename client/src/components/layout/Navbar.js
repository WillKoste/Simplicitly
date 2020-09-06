import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo from '../../images/logo.png';

const Navbar = () => {
    const onClick = (e) => {
        const sideNav = document.querySelector('#side-nav');
        const toggled = sideNav.classList.contains('toggled');

        if(!toggled){
            sideNav.classList.add('toggled');
        } else {
            sideNav.classList.remove('toggled');
        }     
    }
    return (
        <nav className="navbar">
            <div className="nav-items">
                <Link to="/"><img alt="Simplicitly, Full-Stack Web Development - Logo" src={logo} className="logo" /></Link>
                <ul>
                    <li><NavLink exact to="/" activeClassName="current">Home</NavLink></li>
                    <li><NavLink exact to="/contact" activeClassName="current">Contact</NavLink></li>
                    <li><NavLink exact to="/projects" activeClassName="current">Projects</NavLink></li>
                    <li><NavLink exact to="/about" activeClassName="current">About</NavLink></li>
                    <li><NavLink exact to="/sitemap.xml" activeClassName="current" style={{display:'none'}}>Sitemap</NavLink></li>
                </ul>
                <div id="toggle-nav" className="toggle-nav">
                    <Link id="nav-bars" to="#!" onClick={onClick}><i id="toggle-icon" className="fas fa-bars fa-2x"></i></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;