import React, { Component } from 'react'
import Select from 'react-select';
import PropTypes from 'prop-types'

class SelectWithFilter extends Component {
  render() {
    const { onSelectHandler, options, selected, placeholder, id } = this.props
    return(
      <Select
        id={id}
        placeholder={placeholder}
        labelKey="teste"
        name="cliente"
        value={selected}
        onChange={onSelectHandler}
        options={options}
      />
    )
  }
}

SelectWithFilter.propTypes = {
  onSelectHandler: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
}

export default SelectWithFilter