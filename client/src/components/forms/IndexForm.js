import React, {useState, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FormOverlay from './FormOverlay';
import FormUserDetails from './FormUserDetails';
import FormAdditional from './FormAdditional';
// import FormSuccess from './FormOverlay';
import {sendCustomerData, combineForms} from '../../actions/customers';
import {toast} from 'react-toastify';

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

  const resetState = () => {
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#phone').value = '';
    document.querySelector('#current-tech').value = '';
    document.querySelector('#goal').value = '';
    document.querySelector('#message-area').value = '';
  }
  
  const onSubmit = async (e) => {
    e.preventDefault();

    let allFields = await combineForms();

    if(allFields.name === '' || allFields.email === ''){
      toast.error('Name and email fields required');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        currentTech: '',
        goal: ''
      });
    } else{
      toast.success('Message sent');
    }

    sendCustomerData(allFields);
    resetState();
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