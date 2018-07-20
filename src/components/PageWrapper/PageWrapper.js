import React from 'react'
import PropTypes from 'prop-types'
import logo from "./../../logo-white.png";

const PageWrapper = ({children}) => (
  <div className="App">
    <div className="App-header">
      <h1 className="App-title">Front-End Challenge</h1>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    {children}
  </div>
) 

PageWrapper.propTypes = {
  children: PropTypes.object.isRequired,
}

export default PageWrapper

