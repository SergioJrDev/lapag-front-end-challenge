import React, { Component } from 'react'
import { PageWrapper, DatePicker } from './../../components'

class Home extends Component {
  render() {
    return(
      <PageWrapper>
        <div>
          <DatePicker onChangeHandler={() => {}} />
        </div>
      </PageWrapper>
    )
  }
}

export default Home
