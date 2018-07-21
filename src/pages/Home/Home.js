import React, { Component } from 'react'
import { PageWrapper, DatePicker, ScheduleGrid } from './../../components'
import { updateCurrentScheduleDate } from './../../actions'
import { transformDateToDayOfWeek } from './../../utils'

class Home extends Component {

  onChangeHandler = (startDate) => {
    this.props.dispatch(updateCurrentScheduleDate(startDate))
  }

  render() {
    const { schedules, scheduleDate } = this.props
    const { currentDate } = scheduleDate
  
    return(
      <PageWrapper>
        <div>
          <DatePicker startDate={currentDate} onChangeHandler={this.onChangeHandler} />
          <p>{transformDateToDayOfWeek(currentDate)}</p>
          <ScheduleGrid
            schedules={schedules}
            startHour={10}
            endHour={20}
          />
        </div>
      </PageWrapper>
    )
  }
}

export default Home
