import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScheduleItemDetails } from './../'
import './ScheduleGridItem.css'

class ScheduleGridItem extends Component {
  render() {
    const { hour } = this.props
    return(
      <div className="schedule_grid_item">
        {hour === 1 && <ScheduleItemDetails />}
      </div>
    )
  }
}

export default ScheduleGridItem