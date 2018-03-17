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

import { updateCurrentRoute } from './reducers/navBar'


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

const onHomeEnter = () => store.dispatch(updateCurrentRoute('home'))
const onReservationsEnter = () => store.dispatch(updateCurrentRoute('reservations'))
const onGalleryEnter = () => store.dispatch(updateCurrentRoute('gallery'))
const onContactEnter = () => store.dispatch(updateCurrentRoute('contact'))
const onFAQEnter = () => store.dispatch(updateCurrentRoute('FAQ'))


render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={GatorBacked}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={Home} onEnter={onHomeEnter}/>
        <Route path="/reservations" component={Reservation} onEnter={onReservationsEnter}/>
        <Route path="/gallery" component={Gallery} onEnter={onGalleryEnter}/>
        <Route path="/contact" component={Contact} onEnter={onContactEnter}/>
        <Route path="/faq" component={FAQ} onEnter={onFAQEnter}/>
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
