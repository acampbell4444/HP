import React from 'react'
import { render } from 'react-dom'
import Modal from 'react-responsive-modal'
import { Button } from 'react-bootstrap'
import $ from "jquery"
import Icon from 'react-icons-kit'
import { calendar} from 'react-icons-kit/icomoon'
import { hashHistory } from 'react-router'

export default class Reservation extends React.Component {
  
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div id='reserveBody'>
        <div id='reserveCanvas'>
        <h1 id='reserveTitle'>Book online and save $10-<br/> on the 800' Flight!<br/>  </h1>
       <p id='openDate'>     Open May 4th, 2018 </p>
       <p id='contactDetails'> * Reservation times less than 24 hours away should be booked by phone. We don't take your credit card info. Your actual total will vary, depending on what products (photos, etc) you purchase at the time of your trip.  </p>
      
     <div id='bCW'>
              <iframe id="bookingCalendar" 
              src="https://secure.webreserv.com/services/bookingcalendar.do?businessid=havasuparasailaz&embedded=y&search=0&avgrid=n&css=https://www.havasuparasail.com/webReserv.css"  frameBorder="0"
              >
                <a href="https://secure.webreserv.com/services/bookingcalendar.do?businessid=havasuparasailaz&embedded=y&search=0&avgrid=n&css=https://www.havasuparasail.com/webReserv.css">Make Reservation</a>
              </iframe>
      </div>
            
        </div>
      </div>
    )
  }
}
