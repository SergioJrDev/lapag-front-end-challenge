import Component from './ScheduleDetailsViewer'
import { connect } from 'react-redux'

const mapStateToProps = ({ui}, props) => {
  return {
    ui,
    ...props,
  }
}

export default connect(mapStateToProps)(Component)