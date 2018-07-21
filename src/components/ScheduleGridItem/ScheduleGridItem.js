import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { ScheduleItemDetails } from './../'
import moment from 'moment'
import './ScheduleGridItem.css'

const hasScheduleThatDay = ({hour, schedules}) => {
  return schedules.filter(schedule => {
    const scheduleHour = moment(schedule.date).format('HH')
    return parseInt(scheduleHour, 10) === hour
  })
}

class ScheduleGridItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasSchedule: hasScheduleThatDay(this.props)
    }

  }
  render() {
    const { hasSchedule } = this.state
    return(
      <div className="schedule_grid_item">
        {hasSchedule.length > 0 &&
          <ScheduleItemDetails {...hasSchedule[0]} />}
      </div>
    )
  }
}

export default ScheduleGridItem