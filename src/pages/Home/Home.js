import React, { Component } from 'react'
import { PageWrapper, DatePicker } from './../../components'

class Home extends Component {
  render() {
    return(
      <PageWrapper>
        <div>
          <DatePicker onChangeHandler={() => {}} />
          <p>Quarta Feira</p>
        </div>
      </PageWrapper>
    )
  }
}

export default Home
