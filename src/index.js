import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Carrers from './views/carrers'
import Index from './views/index'
import AboutUs from './views/about-us'
import Feedback from './views/feedback'
import WhatAreWe from './views/what-are-we'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Carrers} exact path="/carrers" />
        <Route component={Index} exact path="/" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={Feedback} exact path="/feedback" />
        <Route component={WhatAreWe} exact path="/what-are-we" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
