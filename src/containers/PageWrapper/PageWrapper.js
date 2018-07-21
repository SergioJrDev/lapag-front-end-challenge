import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import { Button } from './../../components'
import logo from "./../../logo-white.png";
import { closeModal } from './../../actions'
Modal.setAppElement('#root')

class PageWrapper extends Component {

  onCloseModalHandler = () => {
    this.props.dispatch(closeModal())
  }

  render() {
    const { children, ui } = this.props
    const { modal: { isOpen, content: Content } } = ui

    return(
      <div className="App">
        <div className="App-header">
        <h1 className="App-title">Front-End Challenge</h1>
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        {children}
        {isOpen && Content && 
          <Modal
            className="Modal"
            overlayClassName="Overlay"
            isOpen={isOpen}>
            <div>
              <Button onClick={this.onCloseModalHandler}>Fechar modal</Button>
              <Content />
            </div>
          </Modal>}
      </div>
    ) 
  }
}

PageWrapper.propTypes = {
  children: PropTypes.object.isRequired,
}

export default PageWrapper

