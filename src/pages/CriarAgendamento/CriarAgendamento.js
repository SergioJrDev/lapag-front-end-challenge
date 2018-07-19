import React, { Component } from 'react'
import { PageWrapper, SelectWithFilter, InputWrapper } from './../../components'
import './style.css'

class CriarAgendamento extends Component {
  state = {
    cliente: '',
  }

  handleChange = (selectedOption) => {
    console.log(selectedOption)
  }

  onChangeSelectHandler = (selected) => {
    console.log('value', selected)
  }

  render() {
    const { cliente } = this.state
    const options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' },
    ]
    return(
      <PageWrapper>
        <form>
          <InputWrapper label="Pesquise por um cliente" id="cliente" input={() =>
            <SelectWithFilter
              placeholder=""
              selected={cliente}
              onSelectHandler={this.onChangeSelectHandler}
              options={options} />
          } />
        </form>
      </PageWrapper>
    )
  }
}

export default CriarAgendamento
