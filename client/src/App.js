import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './css/style.css';
import './css/smaller.css';
import './css/even-smaller.css';
import './css/even-even-smaller.css';
import './css/tablet.css';
import './css/mobile.css';
import {Provider} from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Contact from './components/layout/Contact';
import Projects from './components/layout/Projects';
import About from './components/layout/About';
import NotFound from './components/layout/NotFound';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
