import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import SideNav from './SideNav';
import IndexForm from '../forms/IndexForm';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Landing = () => {
	const closeSideNav = (e) => {
		document.querySelector('#side-nav').classList.remove('toggled');
		document.querySelector('#toggle-icon').className = 'fas fa-bars fa-2x';
	};

	return (
		<Fragment>
			<section id='home' className='home-showcase'>
				<SideNav />
				<div className='home-left' onClick={closeSideNav}>
					<h1 className='home-name'>Implicitly Simple</h1>
					<p className='slogan'>Full-Stack Web Development</p>
					<div className='fake-body'>
						<div className='container' id='container'>
							<IndexForm />
						</div>
					</div>
				</div>
				<div class='home-right' onClick={closeSideNav}>
					<div class='home-image'></div>
					<p>
						Hello- thank you for taking a moment to check out my portfolio! With experience in the web development industry, as well as in-depth knowledge of some of today's most popular technologies, I am looking to join a team of other dedicated individuals to create something impactful in the world. I specialize in the MERN stack, but always look forward to learning something new.{' '}
						<Link to='/about' className='resume-cta'>
							Click here
						</Link>{' '}
						to view my resume and learn more.
					</p>
				</div>
			</section>
			<ToastContainer pauseOnHover={false} />
		</Fragment>
	);
};

export default Landing;
