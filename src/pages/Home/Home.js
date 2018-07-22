import React, { Component } from 'react'
import { DatePicker, ScheduleWrapper, Button } from './../../components'
import { PageWrapper, ModalWrapper, CreateSchedule } from './../../containers'
import { updateCurrentScheduleDate, updateContentModal, openModal } from './../../actions'
import { transformDateToDayOfWeek } from './../../utils'
import { returnProfessionals, getScheduleByDay } from './../../mocks/apiMocks'
import { get as _get } from 'lodash'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allProfessionals: [],
    }
  }

  componentDidMount = async () => {
    try {
      const { scheduleDate: { currentDate }} = this.props
      const schedules = await getScheduleByDay(currentDate)
      const allProfessionals = await returnProfessionals()
      this.setState({
        allProfessionals,
        schedules,
      })
    } catch(err) {
      console.log('err', err)
    }
  }

  componentDidUpdate = async (prevProps) => {
    try {
      const prevDate = _get(prevProps, 'scheduleDate')
      const nowDate = _get(this.props, 'scheduleDate')
      if(prevDate !== nowDate) {
        const schedules = await getScheduleByDay(nowDate.currentDate)
        console.log('updated schedule', schedules.length)
        this.setState({
          schedules
        })
      }
    } catch(err) {
      console.log('err', err)
    }
  }

  onOpenModalHandler = () => {
    const scheduleDate = _get(this, 'props.scheduleDate.currentDate')
    const modalContent = () =>
    <ModalWrapper
      title="Criar agendamento">
      <CreateSchedule dateToSchedule={scheduleDate} />
    </ModalWrapper>
    this.props.dispatch(updateContentModal(modalContent))
    this.props.dispatch(openModal())
  }

  onChangeHandler = (startDate) => {
    this.props.dispatch(updateCurrentScheduleDate(startDate))
  }

  render() {
    const { allProfessionals, schedules } = this.state
    const { scheduleDate } = this.props
    const { currentDate } = scheduleDate
    // console.log('schedule render', schedules)
    return(
      <PageWrapper>
        <div>
          <DatePicker startDate={currentDate} onChangeHandler={this.onChangeHandler} />
          <p>{transformDateToDayOfWeek(currentDate)}</p>
          <Button onClick={this.onOpenModalHandler}>Criar Agendamento</Button>
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
