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
						<a className='resume-btn' href='https://drive.google.com/file/d/1OfWw7gDtmn6u2jPr9X_yCB3PzUCwfIaZ/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
							View My Resume
						</a>
						<p>
							Hello, and thank you for taking a moment to look over my portfolio! I was on the fence about whether or not to include an about section, but I appreciate knowing about the people I work with, so I figure others will too. I am from Charleston, SC and am accompanied by my five-year-old Dalmatian, and six-year-old cat. Going to college as a full-time, working adult served as an important turning point in my life. After switching my area of study numerous times due to uncertainty, I
							quickly realized my passion for web development and spent every minute that I was not at work, on learning JavaScript. My favorite aspect of web development is that you are continuously learning and improving your projects. It's very important to me that when providing a client any services, all parties are able to walk away satisfied with the results.
						</p>
						<p>I primarily focus on backend and full-stack applications - using technologies such as: Node.js, Express, React, and MongoDB. However, I am familiar with many other important languages, and am comfortable with creating website user interfaces with HTML, CSS, Vanilla JavaScript, etc.</p>
						<p>
							I am currently the lead developer for a Portland-based moving company, called MoveAmerica. I have loved my time at the company, and am assured that development is the industry for me. As an employee, I have created two applications for commercial use. The first one involved creating routes that would interact with the Acuity API to synchronize calendars between two Acuity instances (as well as a client-side, admin panel). The second application incolved creating an online
							quoting/scheduling flow that customers could create appointments and instantly receive their calculated quotes based on the information provided.
						</p>
						<p>Please feel free to message me if you have any questions or concerns - I look forward to hearing from you. Have a great day!</p>
						<div className='white-circle'></div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
