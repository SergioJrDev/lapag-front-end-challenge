import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { ScheduleItemDetails } from './../'
import moment from 'moment'
import './ScheduleGridItem.css'

const hasScheduleThatDay = ({hour, schedules, professional}) => {
  console.log('runnn')
  return schedules.filter(schedule => {
    const scheduleHour = moment(schedule.date).format('HH')
    const whichProfessional = schedule.professional._id
    return parseInt(scheduleHour, 10) === hour && professional._id === whichProfessional
  })
}

class ScheduleGridItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasSchedule: hasScheduleThatDay(this.props)
    }
  }

  shouldComponentUpdate = (nextProps) => {
    if(nextProps.schedules !== this.props.schedules) {
      console.log('willupdate', nextProps.schedules)
      this.setState({
        hasSchedule: hasScheduleThatDay(nextProps)
      })
    }
    return true
  }


  render() {
    const { hasSchedule } = this.state
    console.log('willupdate render', hasSchedule.length > 0 && hasSchedule)
    return(
      <div className="schedule_grid_item">
        {hasSchedule.length > 0 &&
          <ScheduleItemDetails {...hasSchedule[0]} />}
      </div>
    )
  }
}

export default ScheduleGridItem