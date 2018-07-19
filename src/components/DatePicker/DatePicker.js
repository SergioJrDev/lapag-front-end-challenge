import React from 'react'
import { SingleDatePicker } from 'react-dates'
import moment from 'moment'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export default class CalendarPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment(),
      focusedInput: 'startDate',
    }
  }

  render() {
    const { startDate } = this.state
    return (
      <SingleDatePicker
        numberOfMonths={1}
        isOutsideRange={() => false}
        date={startDate}
        onDateChange={startDate => this.setState({ startDate })}
        focused={this.state.focused}
        onFocusChange={({ focused }) => this.setState({ focused })}
        id="schedule" 
      />
    )
  }
}
