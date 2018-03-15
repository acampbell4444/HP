import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Carousel } from 'react-responsive-carousel'

export default class Home extends Component {

  componentDidMount() {
  	window.scrollTo(0, 0)
  }

  render() {
    return (
      <div id='homeCanvas'>
              <Carousel showArrows={true} showThumbs={false} autoPlay={true} interval={14000} infiniteLoop={true} >
                <div id='tripCont'>
                    <img src="/images/tripleWide.jpg"/>
                    <div className="legendOverRide" id='pic1leg'>
                      <p id='leg1Text'>COME FLY WITH US!</p>
                      <p id='leg1subText'>Parasailing is safe, easy, and fun.<br/> No skill required. 
                      <br/>Take off and gently land directly on the boat.</p>
                      
                      <div id='bookingButton' onClick={e => browserHistory.push('reservations')}>
                        <span id='bkTxt'> BOOK NOW</span>
                      </div>
                    </div>
                </div>
                <div>
                    <img src="/images/woodBackground.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/images/rockyMtnFarmHouse.jpg" />
                    <p className="legend">Legend 3</p>
                </div>

            </Carousel>
            <div id='underCar'>
              <h1 id='underCarText'>hey</h1>
            </div>



	   </div>
    )
   }
}

