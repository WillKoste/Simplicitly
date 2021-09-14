import React from 'react';
import SideNav from './SideNav';
import DevConnector from '../../images/devconnector-home-min.png';
import MyThreeDogs from '../../images/My Three Dogs-min.PNG';
import LyricSearch from '../../images/lyric-search-min.PNG';
import AdminPanel from '../../images/admin-mockup.png';
import Chatroom from '../../images/phone-mockup-min.png';
import NextStepsEdu from '../../images/NextStepsEdu-min.png';
import Trinity from '../../images/trinity-min.png';
import WebScheduler from '../../images/ma-web-scheduler.png';

const Projects = () => {
	const closeSideNav = (e) => {
		document.querySelector('#side-nav').className = 'side-nav';
	};

	return (
		<section id='projects' className='showcase projects'>
			<SideNav />
			<div className='left-side-secondary'></div>
			<div className='right-side-secondary' onClick={closeSideNav}>
				<div className='container'>
					<h1>Projects</h1>
					<div className='projects-grid'>
						<div className='item'>
							<a href='https://web-scheduler-production.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
								<img src={WebScheduler} alt='Web Scheduler - MERN' />
							</a>
							<a href='https://web-scheduler-production.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
								<p>
									Web Scheduler - <span className='projects-desc'>MERN</span>
								</p>
							</a>
						</div>
						<div className='item'>
							<a href='https://dev-connector-wkoste.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
								<img src={DevConnector} alt='DevConnector - Simplicitly - MERN' />
							</a>
							<a href='https://dev-connector-wkoste.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
								<p>
									DevConnector - <span className='projects-desc'>MERN</span>
								</p>
							</a>
						</div>
						<div className='item'>
							<a href='https://lyric-search-1234.netlify.app/' target='_blank' rel='noopener noreferrer'>
								<img src={LyricSearch} alt='Lyric Search - Simplicitly - React' />
							</a>
							<a href='https://lyric-search-1234.netlify.app/' target='_blank' rel='noopener noreferrer'>
								<p>
									Lyric Search - <span className='projects-desc'>React</span>
								</p>
							</a>
						</div>
						<div className='item'>
							<a href='https://tender-liskov-02d343.netlify.app/' target='_blank' rel='noopener noreferrer'>
								<img src={AdminPanel} alt='Admin Panel - Simplicitly - HTML/CSS/JS' />
							</a>
							<a href='https://tender-liskov-02d343.netlify.app/' target='_blank' rel='noopener noreferrer'>
								<p>
									Admin Panel - <span className='projects-desc'>HTML/CSS/JS</span>
								</p>
							</a>
						</div>
						<div className='item'>
							<a href='https://agile-ocean-07461.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
								<img src={Chatroom} alt='Chat App - Simplicitly - Node, Express, Socket.io' />
							</a>
							<a href='https://agile-ocean-07461.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
								<p>
									Chatroom - <span className='projects-desc'>Node/Express</span>
								</p>
							</a>
						</div>
						<div className='item'>
							<a href='https://stoic-golick-7489c5.netlify.app/' target='_blank' rel='noopener noreferrer'>
								<img src={NextStepsEdu} alt='NextSteps Edu - Simplicitly - HTML/CSS' />
							</a>
							<a href='https://stoic-golick-7489c5.netlify.app/' target='_blank' rel='noopener noreferrer'>
								<p>
									NextSteps Edu - <span className='projects-desc'>HTML/CSS</span>
								</p>
							</a>
						</div>
					</div>
					<div className='white-circle'></div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
