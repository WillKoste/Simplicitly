import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {combineForms} from '../../actions/customers';

const FormOverlay = ({combineForms}) => {
  const onClick = (e) => {
    const signInButton = document.querySelector('#signIn');
    const container = document.querySelector('#container');

    container.classList.add('right-panel-active');

    signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });

    combineForms();
  }
  
  return (
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <h1>Additional Info</h1>
          <p>Have anything else that you would like to include? (optional)</p>
          <button className="ghost" id="signIn"><i className="fas fa-chevron-left"></i>{' '} Go Back</button>
        </div>
        <div className="overlay-panel overlay-right">
          <h1>Hello!</h1>
          <p>Feel free to send me a message, I will get back as soon as I can.</p>
          <button className="ghost" onClick={e => onClick(e)} id="signUp">Next{' '} <i className="fas fa-chevron-right"></i></button>
        </div>
      </div>
    </div>
  )
}

FormOverlay.propTypes = {
  combineForms: PropTypes.func.isRequired
}

export default connect(null, {combineForms})(FormOverlay);