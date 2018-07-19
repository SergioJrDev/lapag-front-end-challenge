import React, { Component } from 'react'
import { PageWrapper, SelectWithFilter, InputWrapper } from './../../components'
import { transformResponseToSelectFormat } from './../../utils'
import { returnClients } from './../../mocks/apiMocks'
import './style.css'

class CriarAgendamento extends Component {
  state = {
    cliente: '',
    clientOptions: [],
  }

  componentDidMount = () => {
    returnClients()
      .then(transformResponseToSelectFormat)
      .then(response => this.setState({clientOptions: response}))
  }

  handleChange = (selectedOption) => {
    console.log(selectedOption)
  }

  onSelectClienteHandler = (selected) => {
    this.setState({cliente: selected})
  }

  render() {
    const { cliente, clientOptions } = this.state

    return(
      <PageWrapper>
        <form>
          <InputWrapper label="Pesquise por um cliente" id="cliente" input={() =>
            <SelectWithFilter
              placeholder=""
              selected={cliente}
              onSelectHandler={this.onSelectClienteHandler}
              options={clientOptions} />
          } />
        </form>
      </PageWrapper>
    )
  }
}

export default CriarAgendamento
