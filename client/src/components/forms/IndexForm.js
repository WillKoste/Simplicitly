import React, {useState, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FormOverlay from './FormOverlay';
import FormUserDetails from './FormUserDetails';
import FormAdditional from './FormAdditional';
import FormSuccess from './FormOverlay';
import {sendCustomerData} from '../../actions/customers';

const IndexForm = ({sendCustomerData}) => {
  const [formData, setFormData] = useState({
    step: 1,
    name: '',
    email: '',
    phone: '',
    message: '',
    currentTech: '',
    goal: ''
  });

  const {name, email, message, phone, step} = formData;

  const nextStep = () => {
    setFormData({
      step: step + 1
    });

    console.log(formData)
  }

  const prevStep = () => {
    setFormData({
      step: step - 1
    });
  }


  const onChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const onSubmit = (e) => {
    e.preventDefault();

    sendCustomerData(formData);
  }
  
  return (
    <Fragment>
      <FormAdditional nextStep={nextStep} onChange={onChange} onSubmit={onSubmit} prevStep={prevStep} />
      <FormUserDetails nextStep={nextStep}  prevStep={prevStep} />
      <FormOverlay nextStep={nextStep} onChange={onChange} onSubmit={onSubmit} prevStep={prevStep} />
    </Fragment>
  )
}

IndexForm.propTypes = {
  sendCustomerData: PropTypes.func.isRequired
}

export default connect(null, {sendCustomerData})(IndexForm);