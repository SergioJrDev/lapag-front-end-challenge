import React, { Component } from 'react'
import { PageWrapper, SelectWithFilter, InputWrapper } from './../../components'
import { transformResponseToSelectFormat } from './../../utils'
import { returnClients, returnProfessionals, returnServicesByProfessional } from './../../mocks/apiMocks'
import './CriarAgendamento.css'
import TimePicker from 'react-times';
import moment from 'moment';
import { get as _get } from 'lodash';

import 'react-times/css/material/default.css';
import 'react-times/css/classic/default.css';

class CriarAgendamento extends Component {
  state = {
    cliente: '',
    funcionario: '',
    clientOptions: [],
    funcionariosOptions: [],
    services: [],
    servicesSelected: [],
    view: {
      horary: {
        hour: moment().format('HH'),
        minute: moment().format('mm'),
      }
    }
  }

  componentDidMount = () => {
    returnClients()
      .then(response => transformResponseToSelectFormat(response, '_id', 'name'))
      .then(response => this.setState({clientOptions: response}))

    returnProfessionals()
      .then(response => transformResponseToSelectFormat(response, 'document_number', 'name'))
      .then(response => this.setState({funcionariosOptions: response}))
  }

  onSelectClienteHandler = (selected) => {
    this.setState({cliente: selected})
  }

  updateServiceList = () => {
    const { funcionario: { value }} = this.state
    returnServicesByProfessional(value)
      .then(services => this.setState({services}))
  }

  onSelectProfessionalHandler = (selected) => {
    this.setState({funcionario: selected, services: []}, this.updateServiceList)
  }

  onCheckboxChangeHandler = (node, index) => {
    const services = [...this.state.services].slice();
    services[index] = {...[...services][index], checked: node.target.checked}
    this.setState({services})
  }

  updateViewerState = (newProperties, object) => {
    this.setState({view: {...this.state.view, [object]: { ...this.state.view[object], ...newProperties }} })
  }

  onFocusChange = (focused) => {
    this.updateViewerState({focused}, 'horary')
  }

  onTimeChange = ({hour, minute, meridiem}) => {
    this.updateViewerState({hour, minute, meridiem}, 'horary')
  }

  render() {
    const { cliente, funcionario, clientOptions, funcionariosOptions, services } = this.state
    const hour = _get(this, 'state.view.horary.hour')
    const minute = _get(this, 'state.view.horary.minute')

    return(
      <PageWrapper>
        <form>
        <TimePicker
          time={`${hour}:${minute}`}
          colorPalette="dark"
          onFocusChange={this.onFocusChange}
          onTimeChange={this.onTimeChange} />
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

          {services.map((service, index) => (
            <InputWrapper key={index} label={service.name} id="funcionario" input={() =>
              <input
                name='name'
                checked={service.checked}
                onChange={element => this.onCheckboxChangeHandler(element, index)}
                value={service.name}
                type="checkbox" />
            } />
          ))}
        </form>
      </PageWrapper>
    )
  }
}

export default CriarAgendamento
