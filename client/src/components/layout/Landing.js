import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import SideNav from './SideNav';
import IndexForm from '../forms/IndexForm';

const Landing = () => {
    const closeSideNav = (e) => {
        document.querySelector('#side-nav').classList.remove('toggled');
        document.querySelector('#toggle-icon').className = 'fas fa-bars fa-2x';
    }

    // const onClick = () => {
    //     const signUpButton = document.querySelector('#signUp');
    //     const signInButton = document.querySelector('#signIn');
    //     const container = document.querySelector('#container');

    //     container.classList.add('right-panel-active');

    //     signInButton.addEventListener('click', () => {
    //         container.classList.remove('right-panel-active');
    //     });
    // }
    
    return (
        <Fragment>
            <section id="home" className="home-showcase">
                <SideNav />
                <div className="home-left" onClick={closeSideNav}>
                    <h1 className="home-name">Let's Make It Happen</h1>
                    <p className="slogan">Full-Stack Web Develpoment</p>
                    <div className="fake-body">
                        <div className="container" id="container">


                            {/* <div class="form-container sign-up-container">
                                <form class="form-create">
                                    <label htmlFor="service-history">My current technologies in use</label>
                                    <textarea name="service-history" id="service-history" cols="30" rows="10"></textarea>
                                    <br/>
                                    <label htmlFor="service-history">What is your project's primary purpose?</label>
                                    <textarea name="service-history" id="service-history" cols="30" rows="10"></textarea>
                                    
                                    <button type="submit">Send</button>
                                </form>
                            </div>


                            <div class="form-container sign-in-container">
                                <form action="#">
                                    <h1>Contact</h1>
                                    <label htmlFor="email">Email *</label>
                                    <input type="email" id="email" required />
                                    <label htmlFor="phone">Phone *</label>
                                    <input type="text" name="phone" id="phone" required/>
                                    <label htmlFor="message">Message *</label>
                                    <textarea name="message" id="message-area" required cols="30" rows="10"></textarea>
                                </form>
                            </div>


                            <div class="overlay-container">
                                <div class="overlay">
                                <div class="overlay-panel overlay-left">
                                    <h1>Additional Info</h1>
                                    <p>Have anything else that you would like to include? (optional)</p>
                                    <button class="ghost" id="signIn"><i className="fas fa-chevron-left"></i>{' '} Go Back</button>
                                </div>
                                <div class="overlay-panel overlay-right">
                                    <h1>Hello!</h1>
                                    <p>Feel free to send me a message, I will get back as soon as I can.</p>
                                    <button class="ghost" onClick={onClick} id="signUp">Next{' '} <i className="fas fa-chevron-right"></i></button>
                                </div>
                                </div>
                            </div> */}

                            <IndexForm />

                            
                        </div>
                    </div>   
                </div> 
                <div class="home-right" onClick={closeSideNav}>
                    <div class="home-image"></div>
                    <p>With experience in multiple web development technologies, including: Node.js, React, HTML, CSS, JavaScript, etc. - my goal is to help solve the problems that individuals and companies face every day. After years of experience in a leadersip role within a company, I have developed many skills that can be used in collaborative work environments as well as independently. <Link to="/about" className="resume-cta">Click here</Link> to view my resume and learn more.</p>
                </div>
            </section>
        </Fragment>
    )
}

export default Landing;