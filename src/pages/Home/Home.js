import React, { Component } from 'react'
import { DatePicker, ScheduleWrapper, Button } from './../../components'
import { CriarAgendamento } from './../'
import { PageWrapper } from './../../containers'
import { updateCurrentScheduleDate, updateContentModal, openModal, addNewSchedule } from './../../actions'
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

    setTimeout(() => {
      console.log('runnn update')
      this.props.dispatch(addNewSchedule(
        {
          date: '2018-07-21T20:19:31.221Z',
          client: {
            _id: 'mt5mSb5oukK6Bu3Yh',
            name: 'Marcelito'
          },
          professional: {
            _id: '4b6BEEvCCH8zAGSyY',
            name: 'Ana Claudia Silveira',
            nickname: 'Ana',
            document_number: '11158031076'
          },
          services: [
            {
              _id: 'SDnJhi87Jznjhowd7',
              name: 'Manicure',
              duration: '60',
              available_professionals: [
                {
                  commission: '50',
                  cpf: '11158031076'
                },
                {
                  commission: '50',
                  cpf: '82053478837'
                },
                {
                  cpf: '45810281820',
                  commission: '42.5'
                }
              ],
              checked: true
            }
          ],
          duration: '45',
          horary: '13:05'
        }
      ))
    }, 2000)
  }

  onOpenModalHandler = () => {
    this.props.dispatch(openModal())
    this.props.dispatch(updateContentModal(CriarAgendamento))
  }

  onChangeHandler = (startDate) => {
    this.props.dispatch(updateCurrentScheduleDate(startDate))
  }

  render() {
    const { allProfessionals } = this.state
    const { schedules, scheduleDate } = this.props
    const { currentDate } = scheduleDate
    // console.log('scheules home', schedules)
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
