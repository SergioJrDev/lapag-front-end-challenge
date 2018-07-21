import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScheduleItemDetails } from './../'
import moment from 'moment'
import './ScheduleGridItem.css'

class ScheduleGridItem extends Component {
  constructor(props) {
    super(props)
    const { hour, schedules } = this.props
    const hasSchedule = schedules.filter(schedule => {
      const scheduleHour = moment(schedule.date).format('HH')
      return parseInt(scheduleHour, 10) === hour
    })
    this.state = {
      hasSchedule
    }

  }
  render() {
    const { hasSchedule } = this.state
    return(
      <div className="schedule_grid_item">
        {hasSchedule.length > 0 && <ScheduleItemDetails {...hasSchedule[0]} />}
      </div>
    )
  }
}

export default ScheduleGridItem