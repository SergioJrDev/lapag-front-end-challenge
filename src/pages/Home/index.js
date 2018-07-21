import Component from './Home'
import { connect } from 'react-redux'

const mapStateToProps = ({scheduleDate, ui, schedules}, props) => {
  return {
    scheduleDate,
    schedules,
    ...props
  }
}

export default connect(mapStateToProps)(Component)
