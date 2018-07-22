import React, { Component } from 'react'
import { ScheduleItemDetails } from './../../containers'
import './ScheduleGridItem.css'

const hasScheduleThatDay = ({hour, schedules, professional}) => {
  return schedules.filter(schedule => {
    const scheduleHour = schedule.horary.replace(/(:)(\d{2}$)/g, '')
    const whichProfessional = schedule.professional._id
    return parseInt(scheduleHour, 10) === hour && professional._id === whichProfessional
  })
}

class ScheduleGridItem extends Component {

  render() {
    const hasSchedule = hasScheduleThatDay(this.props) 
    const { hour } = this.props
    return(
      <div className="schedule_grid_item">
        {hasSchedule.length > 0
          ? <ScheduleItemDetails {...hasSchedule[0]} />
          : <div className="flex-center"><span>{hour}h</span></div>}
      </div>
    )
  }
}

export default ScheduleGridItem