import React from 'react'

const FormRow_02 = ({type, name, value, handleChange,labelText}) => {
  return (
    <div className="form-row">
    <label htmlFor={name} className="form-label">
      {labelText ||name}
    </label>
    <input 
    type={type}
    value={value} name={name} 
    className='form-input' 
    onChange={handleChange}
    />
    </div>
  )
}

export default FormRow_02
