import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Carousel } from 'react-responsive-carousel'

export default class Home extends Component {

  componentDidMount() {
  	window.scrollTo(0, 0)
    this.setState({})
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
                          Cool down. <br/>Take in the Sights from Above. 
                          <br/>Relax. All Captains are USCG licensed.
                          <br/>15 years in the Parasailing Industry. 100% Safety Record.
                      </p>
                    </div>
                </div>
                <div>
                    <img src="/images/londonBridgeWide.jpg" id='pic2'/>
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
              <h1 id='underCarText'>Our Trips</h1>

              <div className="row">
              <div className="col-sm-6">
                <div className="card" >
                  <img className="card-img-top img-responsive" src="/images/clearCouple.jpg" alt="Card image cap1"/>
                  <div className="card-body">
                    <h2 className="card-title">600' Flight</h2>
                    <p className="card-text">Soar high above Lake Havasu with our introductory flight.</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">6 Passengers Max.</li>
                    <li className="list-group-item">Take off and land on boat.</li>
                    <li className="list-group-item">$60 per person.</li>
                  </ul>
                  <div className="card-body">
                    <a href="tel:310-849-9353" className="card-link">Call to Book.</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                  <div className="card" >
                    <img className="card-img-top img-responsive" src="/images/inAirMaui.jpg" alt="Card image cap2"/>
                    <div className="card-body">
                      <h2 className="card-title">800' Flight</h2>
                      <p className="card-text">If you're gonna go- maybe you should go big. 200' higher!</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">6 Passengers Max.</li>
                      <li className="list-group-item">Up to 3 in air at same time.</li>
                      <li className="list-group-item">$70 per person.</li>
                    </ul>
                    <div className="card-body">
                      <a href="tel:310-849-9353" className="card-link">Call to Book.</a>
                    </div>
                  </div>
                </div>
            </div>

             <div className="row">
              <div className="col-sm-6">
                <div className="card" >
                  <img className="card-img-top img-responsive" src="/images/bora.JPG" alt="Card image cap1"/>
                  <div className="card-body">
                    <h2 className="card-title">Photo Package</h2>
                    <p className="card-text">We'll take all the pictures from the boat.</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Share with your whole group.</li>
                    <li className="list-group-item">You get the photos on a high-quality SD card.</li>
                    <li className="list-group-item">$30 total.</li>
                  </ul>

                </div>
              </div>
              <div className="col-sm-6">
                  <div className="card" >
                    <img className="card-img-top img-responsive" src="/images/dip.jpg" alt="Card image cap2"/>
                    <div className="card-body">
                      <h2 className="card-title">GoPro Package</h2>
                      <p className="card-text">You will take our GoPro up in the air with you.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Share with your whole group.</li>
                      <li className="list-group-item">You get the footage on a high-quality SD card.</li>
                      <li className="list-group-item">$30 total.</li>
                    </ul>

                  </div>
                </div>
            </div>

            </div>



	   </div>
    )
   }
}

