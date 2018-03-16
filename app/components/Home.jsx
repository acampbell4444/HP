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
              <Carousel showArrows={true} showThumbs={false}
               autoPlay={true} interval={6000} 
               infiniteLoop={true} >
                
                <div id='tripCont'>
                    <img src="/images/tripleWide.jpg"/>
                    <div id='pic1leg'>
                      <p id='leg1Text'>COME FLY WITH US!</p>
                      <p id='leg1subText'>Parasailing is safe, easy, and fun.<br/> No skill required. 
                      <br/>Take off and gently land sitting on the boat.</p>
                      
                      <div id='bookingButton' onClick={e => browserHistory.push('reservations')}>
                        <span id='bkTxt'> BOOK NOW</span>
                      </div>
                    </div>
                </div>
                
                <div>
                    <img src="/images/goodAir.JPG" id='pic2'/>
                    <div className="legend">
                      <p id='leg2Text'>
                          Cool down. Take in the Sights from Above. 
                          <br/>Relax. All Captains are USCG licensed.
                          <br/>15 years in the Parasailing Industry. 100% Safety Record.
                      </p>
                    </div>
                </div>
                <div>
                    <img src="/images/havasuSunset.jpg" id='pic2'/>
                    <div className="legend">
                      <p id='leg2Text'>
                        We look forward to making this experience the highlight of your stay on Lake Havasu.
                      </p>
                      <div id='bookingButton2' onClick={e => browserHistory.push('reservations')}>
                        <span id='bkTxt2'> BOOK NOW</span>
                      </div>
                    </div>
                  </div>

            </Carousel>
            <div id='underCar'>
              <h1 id='underCarText'>Under Construction</h1>
            </div>



	   </div>
    )
   }
}

