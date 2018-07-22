import React, { Component } from 'react'
import { DatePicker, ScheduleWrapper, Button } from './../../components'
import { PageWrapper, ModalWrapper, CreateSchedule } from './../../containers'
import { updateCurrentScheduleDate, updateContentModal, openModal } from './../../actions'
import { transformDateToDayOfWeek } from './../../utils'
import { returnProfessionals, getScheduleByDay } from './../../mocks/apiMocks'
import { get as _get } from 'lodash'
import Store from './../../store'

let unsubscribe
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allProfessionals: [],
    }
  }

  componentDidMount = async () => {
    try {
      unsubscribe = Store.subscribe(this.updateScheduleView)
      const { scheduleDate: { currentDate }} = this.props
      const schedules = await getScheduleByDay(currentDate)
      const allProfessionals = await returnProfessionals()
      this.setState({
        allProfessionals,
        schedules,
      })
    } catch(err) {
      console.log('Error home.componentDidMount()', err)
    }
  }

  componentWillUnmount = () => {
    unsubscribe()
  }

  componentDidUpdate = async (prevProps) => {
    try {
      const prevDate = _get(prevProps, 'scheduleDate')
      const nowDate = _get(this.props, 'scheduleDate')
      if(prevDate !== nowDate) {
        this.updateScheduleView()
      }
    } catch(err) {
      console.log('Error Home.componentDidUpdate()', err)
    }
  }

  updateScheduleView = async () => {
    try {
      const currentDate = _get(this, 'props.scheduleDate.currentDate')
      const schedules = await getScheduleByDay(currentDate)
      this.setState({schedules})
    }catch(err) {
      console.log('Error Home.updateScheduleView()', err)
    }
  }

  onOpenModalHandler = () => {
    const scheduleDate = _get(this, 'props.scheduleDate.currentDate')
    const modalContent = () =>
    <ModalWrapper
      title="Criar agendamento">
      <CreateSchedule
        updateSchedules={this.updateScheduleView}
        dateToSchedule={new Date(scheduleDate)} />
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
