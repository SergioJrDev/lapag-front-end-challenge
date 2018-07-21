import React, { Component } from 'react'
import { SelectWithFilter, InputWrapper, Select, Button } from './../../components'
import { transformResponseToSelectFormat } from './../../utils'
import { returnClients, returnProfessionals, returnServicesByProfessional,
  returnClientById, returnProfessionalByDocument } from './../../mocks/apiMocks'
import { addNewSchedule } from './../../actions'
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
    date: undefined,
  },
  model: {
    date: undefined,
    client: {},
    professional: {},
    services: [],
    duration: undefined,
    horary: `${hour}:${minute}`,
  }
}

class CriarAgendamento extends Component {
  state = {
    ...stateDefault,
    model: { ...stateDefault.model, date: this.props.scheduleDate.currentDate },
    view: { ...stateDefault.view, date: this.props.scheduleDate.currentDate },
  }

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
  // key: objeto que vai herdar as novas propriedades
  // callback: função de callback
  updateStateObject = (property, newProperties, key, callback = () => {}) => {
    this.setState({
      [property]: {...this.state[property],
        [key]: { ...this.state[property][key], ...newProperties }
      }
    }, callback)
  }

  // property: objeto principal no state
  // newProperties: novas propriedades
  // key: array que vai herdar as novas propriedades
  // reset: deve resetar array
  // callback: função de callback
  updateStateArray = (property, newProperties, key, reset = false, callback = () => {}) => {
    this.setState({
      [property]: {...this.state[property],
        [key]: reset ? newProperties : this.state[property][key].concat(newProperties)
      }
    }, callback)
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
      .then(services =>  this.updateStateArray('view', services, 'services', true, this.filterSelectedsServices))
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
    this.setState({
      view: { ...this.state.view, duration: value },
      model: { ...this.state.model, duration: value },
    })
  }

  onSelectServiceHandler = (node, index) => {
    const services = [...this.state.view.services].slice();
    services[index] = {...[...services][index], checked: node.target.checked}
    this.updateStateArray('view', services, 'services', true, this.filterSelectedsServices)
  }

  filterSelectedsServices = () => {
    const { services } = this.state.view
    const servicesFiltered = services.filter(service => service.checked)
    this.updateStateArray('model', servicesFiltered, 'services', true)
  }

  validateForm = () => {
    const { model } = this.state
    const { date, client, professional, services, duration, horary } = model

    return date && client && professional && services && services.length > 0 && duration && horary
  }

  onSubmitHandler = (event) => {
    const { model } = this.state
    console.log(JSON.stringify(model, null, 2))
    this.props.dispatch(addNewSchedule(model))
    this.setState({...stateDefault})
    event.preventDefault()
    return false
  }

  render() {
    const { view, selected } = this.state
    const { professionals, clients, horary, services, duration, date } = view
    const { client, professional } = selected
    const { hour, minute } = horary
    const formatedDate = moment(date).format('DD/MM')
    const isValidForm = !this.validateForm()
  
    return(
      <form>
        <p>Agendamento para o dia: {formatedDate}</p>
        <div className="input_wrapper">
          <label>Selecione um horário</label>
          <TimePicker
            time={`${hour}:${minute}`}
            colorPalette="dark"
            onFocusChange={this.onFocusChange}
            onTimeChange={this.onTimeChange} />
        </div>

        <InputWrapper label="Pesquise por um cliente" input={() =>
          <SelectWithFilter
            placeholder=""
            selected={client}
            onSelectHandler={this.onSelectClienteHandler}
            options={clients} />
        } />

        <InputWrapper label="Pesquise por um funcionário" input={() =>
          <SelectWithFilter
            placeholder=""
            selected={professional}
            onSelectHandler={this.onSelectProfessionalHandler}
            options={professionals} />
        } />

        <div className="services-options">
          {services.map((service, index) => (
            <InputWrapper key={index} label={service.name} input={(props) =>
              <input
              name={props.name}
              id={props.id}
              checked={service.checked}
              onChange={element => this.onSelectServiceHandler(element, index)}
              value={service.name}
              type="checkbox" />
            } />
          ))}
        </div>

        <InputWrapper label="Selecione a duração" input={() =>
          <Select
            placeholder=""
            name="duration"
            value={duration}
            onSelectHandler={this.onSelectDurationHandler}
            options={durationOptions} />
        } />
        <Button disabled={isValidForm} onClick={this.onSubmitHandler}>Salvar</Button>
      </form>
    )
  }
}

export default CriarAgendamento
