import React, { Component } from 'react'
import { PageWrapper, SelectWithFilter, InputWrapper } from './../../components'
import { transformResponseToSelectFormat } from './../../utils'
import { returnClients, returnProfessionals, returnServicesByProfessional } from './../../mocks/apiMocks'
import './style.css'

class CriarAgendamento extends Component {
  state = {
    cliente: '',
    funcionario: '',
    clientOptions: [],
    funcionariosOptions: [],
  }

  componentDidMount = () => {
    returnClients()
      .then(response => transformResponseToSelectFormat(response, '_id', 'name'))
      .then(response => this.setState({clientOptions: response}))

    returnProfessionals()
      .then(response => transformResponseToSelectFormat(response, 'document_number', 'name'))
      .then(response => this.setState({funcionariosOptions: response}))

      returnServicesByProfessional('97976183079')
        .then(response => console.log('res', response))
        .catch(err => console.log('err', err))
  }

  onSelectClienteHandler = (selected) => {
    this.setState({cliente: selected})
  }

  onSelectProfessionalHandler = (selected) => {
    console.log('func', selected)
    this.setState({funcionario: selected})
  }

  render() {
    const { cliente, funcionario, clientOptions, funcionariosOptions } = this.state

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

          <InputWrapper label="Pesquise por um funcionário" id="funcionario" input={() =>
            <SelectWithFilter
              placeholder=""
              selected={funcionario}
              onSelectHandler={this.onSelectProfessionalHandler}
              options={funcionariosOptions} />
          } />
        </form>
      </PageWrapper>
    )
  }
}

export default CriarAgendamento
