import axios from 'axios';
import {CUSTOMER_ERROR, CUSTOMER_SENT} from './types';

export const sendCustomerData = (formData) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const body = JSON.stringify(formData);

    const res = await axios.post('http://localhost:5000', body, config);

    dispatch({
      type: CUSTOMER_SENT,
      payload: res.data
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: CUSTOMER_ERROR,
      payload: 'Does not work'
    });
  }
}