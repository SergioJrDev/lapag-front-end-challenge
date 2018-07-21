import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import logo from "./../../logo-white.png";
Modal.setAppElement('#root')

class PageWrapper extends Component {
  render() {
    const { children, ui } = this.props
    const { modal: { isOpen, content: Content } } = ui
    console.log(isOpen)
    return(
      <div className="App">
        <div className="App-header">
        <h1 className="App-title">Front-End Challenge</h1>
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        {children}
        {isOpen && 
          <Modal
            className="Modal"
            overlayClassName="Overlay"
            isOpen={isOpen}>
            <p>Olá</p>
          </Modal>}
      </div>
    ) 
  }
}

PageWrapper.propTypes = {
  children: PropTypes.object.isRequired,
}

export default PageWrapper

