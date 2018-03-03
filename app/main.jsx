'use strict'

import 'babel-polyfill'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import store from './store'

import NavBar from './containers/navContainer'
import Home from './containers/homeContainer'
import RainHarvest from './containers/rainHarvestContainer'

import Remodeling from './components/Remodeling'
import Landscaping from './components/Landscaping'
import Contact from './components/Contact'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import Footer from './components/Footer'


const GatorBacked = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <NavBar user={ user }/>
      {children}
      <Footer/>
    </div>
)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={GatorBacked}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/rainHarvest" component={RainHarvest} />
        <Route path="/remodeling" component={Remodeling} />
        <Route path="/landscaping" component={Landscaping} />
        <Route path="/contact" component={Contact} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
