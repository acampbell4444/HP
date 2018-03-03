import React, { Component } from 'react'

export default class Remodeling extends Component {
  
  componentDidMount() {
  	document.body.style.backgroundImage = "url('images/brownstucco.jpg')"
  	window.scrollTo(0, 0)
  }

  render() {
    return (
      <div id='pageContainer'>
        <div id='harvestCanvas'>
          <h1 id='rainHarvestTitle'>SUSTAINABLE REMODELING</h1>
          <h3 id='remodelingText'>Saving money while using fewer resources is every ones goal.
          <br/><br/> Replacing old windows, doors, insulation, or siding with energy efficient upgrades can drastically decrease your energy consumption. Lower your monthly bills and your 
          <a href='http://myfootprint.org/'  target="_blank"> carbon footprint </a>
          with GatorBacked Solutions.<br/><br/>
          In order to remain sustainable, GatorBacked Solutions provides cost effective environmentally conscious options for its clients. Maintaining your property as a part of your effort in sustainability increases the life of your investments.
          <br/><br/> Be a part of the solution with GatorBacked Solutions. Contact a GatorBacked Solutions consultant near you today.</h3>
	        <div className='container'>
            <p className='threeStars'>{'\u2728'}</p>
          </div>
        </div>
	    </div>
    )
   }
}
