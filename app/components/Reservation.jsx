import React from 'react'
import { render } from 'react-dom'
import Modal from 'react-responsive-modal'
import { Button } from 'react-bootstrap'
import $ from 'jquery'
import Icon from 'react-icons-kit'
import { calendar} from 'react-icons-kit/icomoon'
import { browserHistory } from 'react-router'

export default class Reservation extends React.Component {
  state = {open: true}

  onOpenModal = () => {
    this.setState({ open: true })
  }
  onCloseModal = () => {
    browserHistory.push('home')
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { open } = this.state
    return (
      <div id='reserveBody'>
        <div id='reserveCanvas'>
        <h1 id='reserveTitle'>Book online and save $10-<br/> on the 800' Flight!</h1>

              <iframe id="bookingCalendar" 
              src="https://secure.webreserv.com/services/bookingcalendar.do?businessid=havasuparasailaz&embedded=y&search=0&avgrid=y&css=/assets/css/bookingcalendar-2.0/theme-grey-red.css"                      frameBorder="0"
              >
                <a href="https://secure.webreserv.com/services/bookingcalendar.do?businessid=havasuparasailaz&embedded=y&search=0&avgrid=y&css=/assets/css/bookingcalendar-2.0/theme-grey-red.css">Make Reservation</a>
              </iframe>
            
        </div>
      </div>
    )
  }
}
