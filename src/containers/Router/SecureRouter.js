import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../../views/HomePage/HomePage'

class SecureRouter extends Component {
  render () {

    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='*' component={HomePage} />
      </Switch>
    )
  }
}

export default SecureRouter
