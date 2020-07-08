import React from 'react';

const FormAdditional = ({onChange, nextStep, onSubmit}) => {
  return (
    <div className="form-container sign-up-container">
      <form className="form-create">
        <label htmlFor="currentTech">My current technologies in use</label>
        <textarea name="currentTech" id="current-tech" cols="30" rows="10" onChange={onChange}></textarea>
        <label htmlFor="goal">What is your goal's primary purpose?</label>
        <textarea name="goal" id="goal" cols="30" rows="10" onChange={onChange}></textarea>
        
        <button type="submit" onSubmit={e => onSubmit(e)}>Send</button>
      </form>
    </div>
  )
}

export default FormAdditional;