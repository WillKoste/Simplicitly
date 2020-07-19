import React from 'react';

const FormAdditional = ({onChange, onSubmit}) => {
  return (
    <div className="form-container sign-up-container">
      <form id="secondary-form" className="form-create" onSubmit={e => onSubmit(e)}>
        <label htmlFor="currentTech">Which technologies do you use?</label>
        <textarea style={{marginBottom:'.75rem'}} name="currentTech" id="current-tech" cols="30" rows="10" onChange={onChange}></textarea>
        <label htmlFor="goal">What is your project's primary goal?</label>
        <textarea style={{marginBottom:'.75rem'}} name="goal" id="goal" cols="30" rows="10" onChange={onChange}></textarea>
        <input type="hidden" id="joint"/>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default FormAdditional;