import React, { Component } from 'react'
import moment from 'moment'
// import PropTypes from 'prop-types'
import './ScheduleItemDetails.css'

const defineCustomStyle = ({date, duration}) => {
  const height = parseInt(duration, 10) * 100 / 60
  const minutes = moment(date).format('mm') 
  return { height, minutes }
}

class ScheduleItemDetails extends Component {
  render() {
    // console.log(this.props)
    const { client: { name }} = this.props
    const { height, minutes } = defineCustomStyle(this.props)
    const customStyle = {
      height: `${height}%`,
      top: `${minutes}.px`
    }

    return(
      <button style={customStyle} className="schedule_item_details">{name}</button>
    )
  }
}

export default ScheduleItemDetails