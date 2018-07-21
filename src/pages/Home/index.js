import Component from './Home'
import { connect } from 'react-redux'

const mapStateToProps = ({scheduleDate, schedules}, props) => {
  return {
    scheduleDate,
    schedules,
    ...props
  }
}

export default connect(mapStateToProps)(Component)
