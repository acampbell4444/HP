import React, { Component } from 'react'

export default class FAQ extends Component {
  
  componentDidMount() {
    document.body.style.backgroundImage = "url('images/woodBackground.jpg')"
  	window.scrollTo(0, 0)
  }

  render() {
    return (
      <div id='pageContainer'>
        <div id='harvestCanvas'>
          <h1 id='rainHarvestTitle'>FAQ</h1>
          <h3 id='remodelingText'>Under Construction</h3>
	        <div className='cont'>
            <p className='threeStars'>{'\u2728'}</p>
          </div>
        </div>
	    </div>
    )
   }
}
