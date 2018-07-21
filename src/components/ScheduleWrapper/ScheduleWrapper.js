import React, { Component } from 'react'
import { ScheduleGrid } from './../'
import './ScheduleWrapper.css'

class ScheduleWrapper extends Component {
  render() {
    const { allSchedules, allProfessionals } = this.props
    console.log(allProfessionals)

    return(
      <div className="schedule_wrapper">
        {allProfessionals.map(professional => (
          <div key={professional._id}>
            <p>{professional.nickname}</p>
            <ScheduleGrid
            {...professional}
            schedules={allSchedules}
            startHour={10}
            endHour={20}
            />
          </div>
        ))}
      </div>
    ) 
  }
}

export default ScheduleWrapper