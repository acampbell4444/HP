'use strict'

import 'babel-polyfill'
import React from 'react'
import {Router, Route, IndexRedirect, hashHistory} from 'react-router'
import HttpsRedirect from 'react-https-redirect'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import store from './store'

import NavBar from './containers/navContainer'
import Home from './containers/homeContainer'
import Gallery from './containers/galleryContainer'

import Reservation from './components/Reservation'
import FAQ from './components/FAQ'
import Location from './components/Location'

import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

import { updateCurrentRoute } from './reducers/navBar'


const HavasuParasail = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <NavBar user={ user }/>
      {children}
      <Footer/>
    </div>
)

const onHomeEnter = () => store.dispatch(updateCurrentRoute('home'))
const onReservationsEnter = () => store.dispatch(updateCurrentRoute('reservations'))
const onGalleryEnter = () => store.dispatch(updateCurrentRoute('gallery'))
const onFAQEnter = () => store.dispatch(updateCurrentRoute('FAQ'))
const onLocationEnter = () => store.dispatch(updateCurrentRoute('location'))

const ROUTES = (

      <Router history={hashHistory}>
      <Route path="/" component={HavasuParasail}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={Home} onEnter={onHomeEnter}/>
        <Route path="/reservations" component={Reservation} onEnter={onReservationsEnter}/>
        <Route path="/gallery" component={Gallery} onEnter={onGalleryEnter}/>
        <Route path="/faq" component={FAQ} onEnter={onFAQEnter}/>
        <Route path="/location" component={Location} onEnter={onLocationEnter}/>
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  )

export default ROUTES


render(
  <Provider store={store}>
    <HttpsRedirect>
      {ROUTES}
    </HttpsRedirect>
  </Provider>,
  document.getElementById('main')
)

