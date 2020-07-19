import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import SideNav from './SideNav';
import IndexForm from '../forms/IndexForm';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Landing = () => {
    const closeSideNav = (e) => {
        document.querySelector('#side-nav').classList.remove('toggled');
        document.querySelector('#toggle-icon').className = 'fas fa-bars fa-2x';
    }
    
    return (
        <Fragment>
            <section id="home" className="home-showcase">
                <SideNav />
                <div className="home-left" onClick={closeSideNav}>
                    <h1 className="home-name">Let's Make It Happen</h1>
                    <p className="slogan">Full-Stack Web Develpoment</p>
                    <div className="fake-body">
                        <div className="container" id="container">
                            <IndexForm />             
                        </div>
                    </div>   
                </div> 
                <div class="home-right" onClick={closeSideNav}>
                    <div class="home-image"></div>
                    <p>With experience in multiple web development technologies, including: Node.js, React, HTML, CSS, JavaScript, etc. - my goal is to help solve the problems that individuals and companies face every day. After years of experience in a leadersip role within a company, I have developed many skills that can be used in collaborative work environments as well as independently. <Link to="/about" className="resume-cta">Click here</Link> to view my resume and learn more.</p>
                </div>
            </section>
            <ToastContainer pauseOnHover={false} />
        </Fragment>
    )
}

export default Landing;