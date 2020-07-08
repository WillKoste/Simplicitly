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