import React, {useState, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FormOverlay from './FormOverlay';
import FormUserDetails from './FormUserDetails';
import FormAdditional from './FormAdditional';
// import FormSuccess from './FormOverlay';
import {sendCustomerData, combineForms} from '../../actions/customers';

const IndexForm = ({sendCustomerData, combineForms}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    currentTech: '',
    goal: ''
  });

  const onChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    let allFields = await combineForms();

    sendCustomerData(allFields);
    // console.log(formData);
    // sendCustomerData(formData);
  }
  
  return (
    <Fragment>
      <FormAdditional onChange={onChange} onSubmit={onSubmit} />
      <FormUserDetails  />
      <FormOverlay onChange={onChange} onSubmit={onSubmit} />
    </Fragment>
  )
}

IndexForm.propTypes = {
  sendCustomerData: PropTypes.func.isRequired,
  combineForms: PropTypes.func.isRequired
}

export default connect(null, {sendCustomerData, combineForms})(IndexForm);