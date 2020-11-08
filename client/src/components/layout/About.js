import React, {useEffect} from 'react';
import SideNav from './SideNav';

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const closeSideNav = () => {
		document.querySelector('#side-nav').classList.remove('toggled');
	};

	return (
		<div>
			<section id='about' className='showcase about'>
				<SideNav />
				<div className='left-side-secondary'></div>
				<div className='right-side-secondary' onClick={closeSideNav}>
					<div className='container'>
						<h1>About</h1>
						<a className='resume-btn' href='https://drive.google.com/file/d/1-TuvXW6fxI0zYWyrBqfMkCZHhZGL8eAW/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
							View My Resume
						</a>
						<p>
							Hello, and thank you for checking out my personal site! I was on the fence about whether or not to include an about section, but I appreciate knowing about the people I work with, so I figure others will too. I am from Charleston, SC and am accompanied by my five-year-old Dalmatian, and six-year-old cat. Going to college as a full-time, working adult served as an important turning point in my life. After switching my area of study numerous times due to uncertainty, I quickly
							realized my passion for web development and spent every minute that I was not at work, on learning JavaScript. My favorite aspect of web development is that you are continuously learning and improving your projects. It's very important to me that when providing a client any services, all parties are able to walk away satisfied with the results.
						</p>
						<p>
							I primarily focus on backend and full-stack applications - using technologies such as: Node.js, Express, React, and MongoDB. However, I am familiar with many other important languages, and am comfortable with creating website user interfaces with HTML, CSS, Vanilla JavaScript, WordPress, etc. When planning out a new project, it is most important to keep the overall objective in mind - to optimize the time and effort of the customer, as well as the end-users that the project aims to
							reach out to. It is essential for a web developer to share the passion that the customer has for their product - my services aim to go above and beyond my customers' expectations, to create something that everyone will be able to take pride in. Please feel free to message me if you have any questions or concerns - Have a good day!
						</p>
						<div className='white-circle'></div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
