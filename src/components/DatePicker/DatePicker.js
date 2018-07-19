import React from 'react'
import { SingleDatePicker } from 'react-dates'
import moment from 'moment'
import { Button } from './../'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './DatePicker.css'

export default class CalendarPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment(),
      focusedInput: 'startDate',
    }
  }

  nextScheduleDate = () => {
    console.log('incre')
  }

  prevScheduleDate = () => {
    console.log('dec')
  }

  render() {
    const { startDate } = this.state
    return (
      <div className="date_picker">
        <Button onClick={this.prevScheduleDate}>Anterior</Button>
        <SingleDatePicker
        numberOfMonths={1}
        isOutsideRange={() => false}
        date={startDate}
        onDateChange={startDate => this.setState({ startDate })}
        focused={this.state.focused}
        onFocusChange={({ focused }) => this.setState({ focused })}
        id="schedule" 
        />
        <Button onClick={this.nextScheduleDate}>Próximo</Button>
      </div>
    )
  }
}
