import React, { Component } from 'react'
import { PageWrapper, SelectWithFilter, InputWrapper, Select } from './../../components'
import { transformResponseToSelectFormat } from './../../utils'
import { returnClients, returnProfessionals, returnServicesByProfessional,
  returnClientById, returnProfessionalByDocument } from './../../mocks/apiMocks'
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

const hour = moment().format('HH')
const minute = moment().format('mm')

const stateDefault = {
  selected: {
    client: {},
    professional: {},
  },
  view: {
    horary: {
      hour,
      minute,
    },
    duration: undefined,
    services: [],
    clients: [],
    professionals: [],
  },
  model: {
    client: {},
    professional: {},
    services: [],
    duration: undefined,
    horary: `${hour}:${minute}`,
  }
}

class CriarAgendamento extends Component {
  state = {...stateDefault}

  componentDidMount = () => {
    returnClients()
      .then(response => transformResponseToSelectFormat(response, '_id', 'name'))
      .then(clients => this.updateStateArray('view', clients, 'clients'))

    returnProfessionals()
      .then(response => transformResponseToSelectFormat(response, 'document_number', 'name'))
      .then(professionals =>  this.updateStateArray('view', professionals, 'professionals'))
  }

  // property: objeto principal no state
  // newProperties: novas propriedades
  // key: objeto que vai herdar propriedades
  // callback: função de callback
  updateStateObject = (property, newProperties, key, callback = () => {}) => {
    this.setState({
      [property]: {...this.state[property],
        [key]: { ...this.state[property][key], ...newProperties }
      }
    }, () => callback())
  }

  // property: objeto principal no state
  // newProperties: novas propriedades
  // key: objeto que vai herdar propriedades
  // reset: deve resetar array
  updateStateArray = (property, newProperties, key, reset = false) => {
    this.setState({
      [property]: {...this.state[property],
        [key]: reset ? newProperties : this.state[property][key].concat(newProperties)
      }
    })
  }

  onSelectClienteHandler = ({value, label}) => {
    this.updateStateObject('selected', {value, label}, 'client', this.updateClientModel)
  }

  updateClientModel = () => {
    const { client: { value }} = this.state.selected
    returnClientById(value)
    .then(client => this.updateStateObject('model', {...client}, 'client'))
  }

  onFocusChange = (focused) => {
    this.updateStateObject('view', {focused}, 'horary')
  }

  onTimeChange = ({hour, minute, meridiem}) => {
    this.updateStateObject('view', {hour, minute, meridiem}, 'horary')
    this.setState({model: { ...this.state.model, horary: `${hour}:${minute}` }})
  }

  updateServiceList = () => {
    const { professional: { value }} = this.state.selected
    returnServicesByProfessional(value)
      .then(services =>  this.updateStateArray('view', services, 'services', true))
  }

  updateServiceListAndProfessionalSelected = () => {
    this.updateServiceList()
    this.updateProfessionalSelected()
  }

  updateProfessionalSelected = () => {
    const { professional: { value }} = this.state.selected
    returnProfessionalByDocument(value)
      .then(professional => this.updateStateObject('model', {...professional}, 'professional'))
  }

  onSelectProfessionalHandler = ({value, label}) => {
    this.updateStateObject('selected', {value, label}, 'professional', this.updateServiceListAndProfessionalSelected)
  }

  onSelectDurationHandler = ({target}) => {
    const { value } = target
    this.setState({view: { ...this.state.view, duration: value }})
  }

  onCheckboxChangeHandler = (node, index) => {
    const services = [...this.state.view.services].slice();
    services[index] = {...[...services][index], checked: node.target.checked}
    this.updateStateArray('view', services, 'services', true)
  }

  render() {
    const { view, selected } = this.state
    const { professionals, clients, horary, services, duration } = view
    const { client, professional } = selected
    const { hour, minute } = horary
    console.log(JSON.stringify(this.state.model, null, 2))
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
              selected={client}
              onSelectHandler={this.onSelectClienteHandler}
              options={clients} />
          } />

          <InputWrapper label="Pesquise por um funcionário" id="funcionario" input={() =>
            <SelectWithFilter
              placeholder=""
              selected={professional}
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
