import React, { Component } from 'react'
import { PageWrapper, SelectWithFilter, InputWrapper, Select } from './../../components'
import { transformResponseToSelectFormat } from './../../utils'
import { returnClients, returnProfessionals, returnServicesByProfessional } from './../../mocks/apiMocks'
import './CriarAgendamento.css'
import TimePicker from 'react-times';
import moment from 'moment';

import 'react-times/css/material/default.css';
import 'react-times/css/classic/default.css';

const durationOptions = [
  {value: 30, label: '30 minutos'},
  {value: 45, label: '45 minutos'},
  {value: 60, label: '1 hora'},
  {value: 90, label: '1 hora e meia'},
  {value: 120, label: '2 horas'},
]

class CriarAgendamento extends Component {
  state = {
    cliente: '',
    funcionario: '',
    view: {
      horary: {
        hour: moment().format('HH'),
        minute: moment().format('mm'),
      },
      duration: undefined,
      services: [],
      clients: [],
      professionals: [],
    },
  }

  componentDidMount = () => {
    returnClients()
      .then(response => transformResponseToSelectFormat(response, '_id', 'name'))
      .then(clients => this.updateViewerStateArray(clients, 'clients'))

    returnProfessionals()
      .then(response => transformResponseToSelectFormat(response, 'document_number', 'name'))
      .then(professionals =>  this.updateViewerStateArray(professionals, 'professionals'))
  }

  updateViewerStateObject = (newProperties, object) => {
    this.setState({
      view: {...this.state.view,
        [object]: { ...this.state.view[object], ...newProperties }
      }
    })
  }

  updateViewerStateArray = (newProperties, object, reset = false) => {
    this.setState({
      view: {...this.state.view,
        [object]: reset ? newProperties : this.state.view[object].concat(newProperties)
      }
    })
  }

  onSelectClienteHandler = (selected) => {
    this.setState({cliente: selected})
  }

  updateServiceList = () => {
    const { funcionario: { value }} = this.state
    returnServicesByProfessional(value)
      .then(services =>  this.updateViewerStateArray(services, 'services', true))
  }

  onSelectProfessionalHandler = (selected) => {
    this.setState({funcionario: selected, services: []}, this.updateServiceList)
  }

  onSelectDurationHandler = ({target}) => {
    const { value } = target
    this.setState({view: { ...this.state.view, duration: value }})
  }

  onCheckboxChangeHandler = (node, index) => {
    const services = [...this.state.view.services].slice();
    services[index] = {...[...services][index], checked: node.target.checked}
    this.updateViewerStateArray(services, 'services', true)
  }

  onFocusChange = (focused) => {
    this.updateViewerStateObject({focused}, 'horary')
  }

  onTimeChange = ({hour, minute, meridiem}) => {
    this.updateViewerStateObject({hour, minute, meridiem}, 'horary')
  }

  render() {
    const { cliente, funcionario, view } = this.state
    const { professionals, clients, horary, services, duration } = view
    const { hour, minute } = horary

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
              options={clients} />
          } />

          <InputWrapper label="Pesquise por um funcionário" id="funcionario" input={() =>
            <SelectWithFilter
              placeholder=""
              selected={funcionario}
              onSelectHandler={this.onSelectProfessionalHandler}
              options={professionals} />
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

          <InputWrapper label="Selecione a duração" id="duration" input={() =>
            <Select
              placeholder=""
              name="duration"
              value={duration}
              onSelectHandler={this.onSelectDurationHandler}
              options={durationOptions} />
          } />
        </form>
      </PageWrapper>
    )
  }
}

export default CriarAgendamento
