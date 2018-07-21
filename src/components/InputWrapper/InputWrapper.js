import React from 'react'
import PropTypes from 'prop-types'
import './inputWrapper.css'

const InputWrapper = ({label, input: InputElement}) => (
  <div className="input_wrapper">
    <label htmlFor={label}>{label}</label>
    <InputElement name={label} id={label} />
  </div>
)

InputWrapper.propTypes = {
  label: PropTypes.string.isRequired,
}

export default InputWrapper
