import React, { Component } from 'react'
import './ScheduleDetailsViewer.css'
import moment from 'moment'

class ScheduleDetailsViewer extends Component {
  render() {
    const { client, professional, services, duration, horary, date } = this.props
    const { name } = client
    const { nickname } = professional


    return(
      <div className="schedule_details_viewer item">
        <div className="item_wrapper">
          <span>Cliente</span>
          <p>{name}</p>
        </div>
        <div className="item_wrapper">
          <span>Profissional</span>
          <p>{nickname}</p>
        </div>
        <div className="item_wrapper">
          <span>Data</span>
          <p>{moment(date).format('DD/MM/YYYY')}</p>
        </div>
        <div className="item_wrapper">
          <span>Horário</span>
          <p>{horary}h</p>
        </div>
        <div className="item_wrapper">
          <span>Duração</span>
          <p>{duration} minutos</p>
        </div>
        <div className="item_wrapper">
          <span>Serviços</span>
          {services.map(({name, _id}) => <p key={_id}>{name}</p>)}
        </div>
      </div>
    )
  }
}

export default ScheduleDetailsViewer