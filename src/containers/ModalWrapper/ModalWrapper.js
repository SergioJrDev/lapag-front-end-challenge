import React, { Component } from'react'
import './ModalWrapper.css'
import { Button } from './../../components'
import { closeModal } from './../../actions'

class ModalWrapper extends Component { 

  onCloseModalHandler = () => {
    this.props.dispatch(closeModal())
  }

  render() {
    const { title, children } = this.props
    return(
      <div className="modal_wrapper">
        <div className="header theme-bg">
        <Button onClick={this.onCloseModalHandler}>x</Button>
         <h2>{title}</h2>
        </div>
        {children}
      </div>
    )
  }
}

export default ModalWrapper