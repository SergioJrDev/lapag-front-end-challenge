import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Home, CriarAgendamento } from './../pages'

class AppRouter extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/criar-agendamento' component={CriarAgendamento} />
          <Redirect to='/' />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter