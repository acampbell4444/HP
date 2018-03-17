import React, { Component } from 'react'

export default class Reservation extends Component {
  
  componentDidMount() {
  	window.scrollTo(0, 0)
  }

  render() {
    return (
      <div id='reserveCanvas'>
          <h1 id='resText'>Reservations</h1>
            <h3 id='t1'>Under Construction.</h3> 
              <h3 id='t2'>Open April 20, 2018. </h3>
              <h3 id='t3'>Call<a href="tel:310-849-9353" > (310) 849-9353<br/> </a> to Reserve.</h3>
      
		         <div className='cont'>
               <p className='threeStars'>{'\u2728'}</p>
		         </div>
      </div>
    )
   }
}
