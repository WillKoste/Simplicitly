import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {sendCustomerData} from '../../actions/customers';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPageForm = ({sendCustomerData}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  
  const onChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const resetState = () => {
    document.querySelector('#name-input').value = '';
    document.querySelector('#email-input').value = '';
  }

  const notify = () => {
    if(formData.email ===  '' || formData.name === ''){
      toast.error('Name and email fields are required');
      setFormData({name: '', email: ''});
    } else{
      toast.success('Info submitted');
      setFormData({name: '', email: ''});
    }
  }

  const onSubmit = e => {
    e.preventDefault();
    sendCustomerData(formData);
    notify();
    resetState();
  }
  
  return (
    <div className="form-container">
      <form id="contact-form" className="contact-form" onSubmit={e => onSubmit(e)} >
        <div className="form-group">
          <label htmlFor="name" id="name" className="name-field">Name</label>
          <input type="text" id="name-input" name="name" className="name-input"  onChange={e => onChange(e)} />
        </div>
        <div className="form-group">
          <label htmlFor="email" id="email" className="email-field">Email</label>
          <input type="text" id="email-input" name="email" className="email-input" onChange={e => onChange(e)} />
        </div>
        <input type="submit" value="Submit" className="contact-submit" />
      </form>
      <ToastContainer pauseOnHover={false} />
    </div>
  )
}

ContactPageForm.propTypes = {
  sendCustomerData: PropTypes.func.isRequired
}

export default connect(null, {sendCustomerData})(ContactPageForm);