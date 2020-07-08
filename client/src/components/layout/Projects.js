import React from 'react';
import SideNav from './SideNav';
import DevConnector from '../../images/devconnector-home-min.png';
import MyThreeDogs from '../../images/My Three Dogs-min.PNG';
import LyricSearch from '../../images/lyric-search-min.PNG';
import AdminPanel from '../../images/admin-panel-min.PNG';
import Chatroom from '../../images/chatroom-min.PNG';
import NextStepsEdu from '../../images/NextStepsEdu-min.png';

const Projects = () => {
  const closeSideNav = (e) => {
    document.querySelector('#side-nav').className = 'side-nav';
  }
  
  return (
    <section id="projects" className="showcase projects">
      <SideNav />
      <div className="left-side-secondary"></div>
      <div className="right-side-secondary" onClick={closeSideNav}>
        <div className="container">
          <h1>Projects</h1>
          <div className="projects-grid">
            <div className="item">
              <a href="https://willscooltestdomain.com" target="_blank" rel="noopener noreferrer"><img src={DevConnector} alt="DevConnector"/></a>
              <a href="https://willscooltestdomain.com"><p>DevConnector - <span className="projects-desc">MERN</span></p></a>
            </div>
            <div className="item">
              <a href="https://doobiedalmatian.com" target="_blank" rel="noopener noreferrer"><img src={MyThreeDogs} alt="My Three Dogs"/></a>
              <a href="https://doobiedalmatian.com" target="_blank" rel="noopener noreferrer"><p>My Three Dogs - <span className="projects-desc">Wordpress</span></p></a>
            </div>
            <div className="item">
              <a href="https://lyric-search-1234.netlify.app/" target="_blank" rel="noopener noreferrer"><img src={LyricSearch} alt="Lyric Search"/></a>
              <a href="https://lyric-search-1234.netlify.app/" target="_blank" rel="noopener noreferrer"><p>Lyric Search - <span className="projects-desc">React</span></p></a>
            </div>
            <div className="item">
              <a href="https://tender-liskov-02d343.netlify.app/" target="_blank" rel="noopener noreferrer"><img src={AdminPanel} alt="Admin Panel"/></a>
              <a href="https://tender-liskov-02d343.netlify.app/" target="_blank" rel="noopener noreferrer"><p>Admin Panel - <span className="projects-desc">HTML/CSS/JS</span></p></a>
            </div>
            <div className="item">
              <a href="https://agile-ocean-07461.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={Chatroom} alt="Chat App"/></a>
              <a href="https://agile-ocean-07461.herokuapp.com/" target="_blank" rel="noopener noreferrer"><p>Chatroom - <span className="projects-desc">Node/Express</span></p></a>
            </div>
            <div className="item">
              <a href="https://stoic-golick-7489c5.netlify.app/" target="_blank" rel="noopener noreferrer"><img src={NextStepsEdu} alt="NextSteps Edu"/></a>
              <a href="https://stoic-golick-7489c5.netlify.app/" target="_blank" rel="noopener noreferrer"><p>NextSteps Edu - <span className="projects-desc">HTML/CSS</span></p></a>
            </div>
          </div>
          <div className="white-circle"></div>
        </div>
      </div>
    </section>
  )
}

export default Projects;