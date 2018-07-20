import React from 'react'
import PropTypes from 'prop-types'
import './inputWrapper.css'

const InputWrapper = ({label, id, input: InputElement}) => (
  <div className="input_wrapper">
    <label htmlFor={id}>{label}</label>
    <InputElement id={id} />
  </div>
)

InputWrapper.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default InputWrapper
