import {CUSTOMER_ERROR, CUSTOMER_SENT} from '../actions/types';

const initialState = {
  customer: null,
  loading: false,
  error: {}
}

export default function(state = initialState, action){
  const {type, payload} = action;

  switch(type){
    case CUSTOMER_SENT:
      return {
        ...state,
        customer: payload
      }
    case CUSTOMER_ERROR:
      return {
        ...state,
        customer: null,
        error: payload
      }
    default:
      return state;
  }
}