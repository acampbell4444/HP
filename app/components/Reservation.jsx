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

  render() {
    const { open } = this.state
    return (
      <div id='reserveBody'>
        <div id='reserveCanvas'>
    

            <Modal id='reservationModal' open={open} onClose={this.onCloseModal} showCloseIcon={false}>
              <iframe id="bookingCalendar" 
              src="https://secure.webreserv.com/services/bookingcalendar.do?businessid=havasuparasailaz&embedded=y&search=0&avgrid=y&css=/assets/css/bookingcalendar-2.0/theme-grey-red.css"                      frameBorder="0"
              >
                <a href="https://secure.webreserv.com/services/bookingcalendar.do?businessid=havasuparasailaz&embedded=y&search=0&avgrid=y&css=/assets/css/bookingcalendar-2.0/theme-grey-red.css">Make Reservation</a>
              </iframe>
              <Button id='closeModalBtn' className='btn btn-danger btn-xs' onClick={e => browserHistory.push('home')}>Close</Button>
            </Modal>
        </div>
      </div>
    )
  }
}
