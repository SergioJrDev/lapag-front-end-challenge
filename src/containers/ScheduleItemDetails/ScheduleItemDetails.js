import React, { Component } from 'react'
import { Button } from './../../components'
import { ModalWrapper, ScheduleDetailsViewer } from './../../containers'
import { openModal, updateContentModal } from './../../actions'
import './ScheduleItemDetails.css'

const defineCustomStyle = ({horary, duration}) => {
  const height = parseInt(duration, 10) * 100 / 60
  const minutes = horary.replace(/(^\d{2})(:)/g, '')
  return { height, minutes }
}

class ScheduleItemDetails extends Component {
  onViewDetailsHandler = () => {
    const modalContent = () =>
    <ModalWrapper title="Detalhes do agendamento">
      <ScheduleDetailsViewer {...this.props} />
    </ModalWrapper>

    this.props.dispatch(updateContentModal(modalContent))
    this.props.dispatch(openModal())
  }
  render() {
    const { client: { name }} = this.props
    const { height, minutes } = defineCustomStyle(this.props)
    const customStyle = {
      height: `${height}%`,
      top: `${minutes}.px`
    }

    return(
      <Button
        onClick={this.onViewDetailsHandler}
        style={customStyle}
        className="schedule_item_details">{name}</Button>
    )
  }
}

export default ScheduleItemDetails