import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScheduleGridItem } from './../'
import './ScheduleGrid.css'

class ScheduleGrid extends Component {
  render() {
    return(
      <div className="schedule_grid">
        <div className="schedule_grid_wrapper">
          <ScheduleGridItem hour={1} />
          <ScheduleGridItem />
          <ScheduleGridItem />
          <ScheduleGridItem />
          <ScheduleGridItem />
          <ScheduleGridItem />
        </div>
        <div className="schedule_grid_wrapper">
          <ScheduleGridItem />
          <ScheduleGridItem />
          <ScheduleGridItem />
          <ScheduleGridItem />
          <ScheduleGridItem />
          <ScheduleGridItem />
        </div>
        <div className="schedule_grid_wrapper">
          <ScheduleGridItem />
          <ScheduleGridItem />
          <ScheduleGridItem />
          <ScheduleGridItem />
          <ScheduleGridItem />
          <ScheduleGridItem />
        </div>
      </div>
    )
  }
}

export default ScheduleGrid