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
    const { startDate }  = this.state
    this.onDateChangeHandler(startDate.add(1, 'day'))
  }

  prevScheduleDate = () => {
    const { startDate }  = this.state
    this.onDateChangeHandler(startDate.subtract(1, 'day'))
  }

  onDateChangeHandler = (startDate) => this.setState({startDate})

  render() {
    const { startDate } = this.state
    return (
      <div className="date_picker">
        <Button onClick={this.prevScheduleDate}>Anterior</Button>
        <SingleDatePicker
        numberOfMonths={1}
        isOutsideRange={() => false}
        date={startDate}
        onDateChange={this.onDateChangeHandler}
        focused={this.state.focused}
        onFocusChange={({ focused }) => this.setState({ focused })}
        id="schedule" 
        />
        <Button onClick={this.nextScheduleDate}>Próximo</Button>
      </div>
    )
  }
}
