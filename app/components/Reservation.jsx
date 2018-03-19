import React, { Component } from 'react'

export default class Reservation extends Component {
  
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentDidUpdate() {
  	window.scrollTo(0, 0)
  }

  render() {
    return (
      <div id='reserveCanvas' className'flex container'>

          <h1 id='reservationTitle'>Reserve Online and get the 800' flight for $65!</h1>

            <iframe className='flex' id="bookingcalendar" src="https://secure.webreserv.com/services/bookingcalendar.do?businessid=havasuparasailaz&embedded=y&search=0&avgrid=y&css=/assets/css/bookingcalendar-2.0/theme-grey-red.css"
             frameBorder="0"><a href="https://secure.webreserv.com/services/bookingcalendar.do?businessid=havasuparasailaz&embedded=y&search=0&avgrid=y&css=/assets/css/bookingcalendar-2.0/theme-grey-red.css">Make Reservation</a></iframe>




		         <div className='cont'>
               <p className='threeStars'>{'\u2728'}</p>
		         </div>
      </div>
    )
   }
}
