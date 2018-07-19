import React, { Component } from 'react'
import { PageWrapper, DatePicker } from './../../components'
import { updateCurrentScheduleDate } from './../../actions'
import { transformDateToDayOfWeek } from './../../utils'

class Home extends Component {

  onChangeHandler = (startDate) => {
    this.props.dispatch(updateCurrentScheduleDate(startDate))
  }

  render() {
    const { currentDate } = this.props.scheduleDate
    return(
      <PageWrapper>
        <div>
          <DatePicker startDate={currentDate} onChangeHandler={this.onChangeHandler} />
          <p>{transformDateToDayOfWeek(currentDate)}</p>
        </div>
      </PageWrapper>
    )
  }
}

export default Home
