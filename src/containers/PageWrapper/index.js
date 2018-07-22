import Component from './PageWrapper'
import { connect } from 'react-redux'

const mapStateToProps = ({ui}, props) => {
  return {
    ui,
    ...props,
  }
}

export default connect(mapStateToProps)(Component)