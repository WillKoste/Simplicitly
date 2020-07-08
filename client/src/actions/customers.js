import axios from 'axios';
import {CUSTOMER_ERROR, CUSTOMER_SENT} from './types';

export const sendCustomerData = (formData) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const res = await axios.post('/api/customers', formData, config);

    dispatch({
      type: CUSTOMER_SENT,
      payload: res.data
    });
  } catch (err) {
    console.error(err);
    console.log('This is whats wrong');
    dispatch({
      type: CUSTOMER_ERROR,
      payload: 'Does not work'
    });
  }
}

export const combineForms = () => async dispatch => {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;

  let joint = document.querySelector('#joint');
  joint.value = {
    name,
    email
  }
  alert('It actually freaking works');
  console.log(joint);
}