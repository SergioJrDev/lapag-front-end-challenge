import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Select extends Component {
  render() {
    const { onSelectHandler, options, name, selected, placeholder, id } = this.props
    return(
      <select
        id={id}
        placeholder={placeholder}
        name={name}
        value={selected}
        onChange={onSelectHandler}>
        {options.map((option, index) => <option value={option.value} key={index}>{option.label}</option>)}
        </select>
    )
  }
}

Select.propTypes = {
  onSelectHandler: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
}

export default Select