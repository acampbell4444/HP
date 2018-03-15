'use strict'

import 'babel-polyfill'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import store from './store'

import NavBar from './containers/navContainer'
import Home from './containers/homeContainer'
import Gallery from './containers/galleryContainer'

import Reservation from './components/Reservation'
import Contact from './components/Contact'
import FAQ from './components/FAQ'

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
        <Route path="/reservations" component={Reservation} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={FAQ} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
