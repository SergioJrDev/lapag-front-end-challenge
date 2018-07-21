import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScheduleGridItem } from './../'
import './ScheduleGrid.css'

const generateAvaliableHoursArray = ({startHour, endHour}) => {
  let hoursAvaliablePerDay = []
  for(let i = startHour; i <= endHour; i++) {
    hoursAvaliablePerDay.push(i)
  }
  return hoursAvaliablePerDay
}

class ScheduleGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hoursAvaliablePerDay: generateAvaliableHoursArray(this.props)
    }
  }

  render() {
    const { hoursAvaliablePerDay } = this.state
    const { schedules } = this.props

    return(
      <div className="schedule_grid">
      <div className="schedule_grid_wrapper">
          {hoursAvaliablePerDay.map((hour, index) => (
            <ScheduleGridItem
              schedules={schedules}
              key={index}
              hour={hour} />
          ))}
        </div>
      </div>
    )
  }
}

ScheduleGrid.propTypes = {
  startHour: PropTypes.number.isRequired,
  endHour: PropTypes.number.isRequired,
}

export default ScheduleGrid