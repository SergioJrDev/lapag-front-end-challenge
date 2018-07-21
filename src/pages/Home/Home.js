import React, { Component } from 'react'
import { PageWrapper, DatePicker, ScheduleWrapper } from './../../components'
import { updateCurrentScheduleDate } from './../../actions'
import { transformDateToDayOfWeek } from './../../utils'
import { returnProfessionals } from './../../mocks/apiMocks'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allProfessionals: [],
    }
  }

  componentDidMount = async () => {
    const allProfessionals = await returnProfessionals()
    this.setState({
      allProfessionals,
    })
  }

  onChangeHandler = (startDate) => {
    this.props.dispatch(updateCurrentScheduleDate(startDate))
  }

  render() {
    const { allProfessionals } = this.state
    const { schedules, scheduleDate } = this.props
    const { currentDate } = scheduleDate

    return(
      <PageWrapper>
        <div>
          <DatePicker startDate={currentDate} onChangeHandler={this.onChangeHandler} />
          <p>{transformDateToDayOfWeek(currentDate)}</p>
          <ScheduleWrapper
            allProfessionals={allProfessionals}
            allSchedules={schedules}
          />
        </div>
      </PageWrapper>
    )
  }
}

export default Home
