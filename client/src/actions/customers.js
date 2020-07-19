import axios from 'axios';
import {CUSTOMER_ERROR, CUSTOMER_SENT} from './types';

export const combineForms = () => async dispatch => {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const message = document.querySelector('#message-area').value;
  const currentTech = document.querySelector('#current-tech').value;
  const goal = document.querySelector('#goal').value;

  let joint = {};
  joint = {
    name,
    message,
    phone,
    email,
    currentTech,
    goal
  }
  console.log(joint);
  return joint;
}

export const sendCustomerData = (formData) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    combineForms();

    const res = await axios.post('/api/customers', formData, config);

    console.log('Didnt make it to the dispatch');
    
    dispatch({
      type: CUSTOMER_SENT,
      payload: res.data
    });
  } catch (err) {
    console.error(err);
    console.log('Bad Request');
    dispatch({
      type: CUSTOMER_ERROR,
      payload: 'Does not work'
    });
  }
}

