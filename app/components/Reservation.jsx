import React, { Component } from 'react'

export default class Reservation extends Component {
  
  componentDidMount() {
  	window.scrollTo(0, 0)
  }

  render() {
    return (
      <div id='reserveCanvas'>

            <iframe id="bookingcalendar" src="https://secure.webreserv.com/services/bookingcalendar.do?businessid=havasuparasailaz&embedded=y&search=0&avgrid=y&css=/assets/css/bookingcalendar-2.0/theme-grey-red.css"
             style={{'width': '100%', 'max-width': '800px', 'height': '1200px', 'border': '0', 'padding': '0', 'margin': '0'}} frameBorder="0"><a href="https://secure.webreserv.com/services/bookingcalendar.do?businessid=havasuparasailaz&embedded=y&search=0&avgrid=y&css=/assets/css/bookingcalendar-2.0/theme-grey-red.css">Make Reservation</a></iframe>




		         <div className='cont'>
               <p className='threeStars'>{'\u2728'}</p>
		         </div>
      </div>
    )
   }
}
