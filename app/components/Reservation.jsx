import React, { Component } from 'react'

export default class Reservation extends Component {
  
  componentDidMount() {
  	window.scrollTo(0, 0)
  }

  render() {
    return (
      <div id='reserveCanvas'>
          <h1 id='resText'>Reservations</h1>
            <h3 id='resText'>Under Construction. <br/>
              Open April 20, 2018. <br/>
              Call 310-849-9353 to Reserve.
            </h3>
		         <div className='cont'>
               <p className='threeStars'>{'\u2728'}</p>
		         </div>
      </div>
    )
   }
}
