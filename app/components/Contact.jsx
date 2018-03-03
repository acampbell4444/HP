import React, { Component } from 'react'

export default class Contact extends Component {
  
  componentDidMount() {
    document.body.style.backgroundImage = "url('images/woodBackground.jpg')"
  	window.scrollTo(0, 0)
  }

  render() {
    return (
      <div id='pageContainer'>
      <div id='harvestCanvas'>
      <h1 id='rainHarvestTitle'>CONTACT</h1>
      <h3 id='harvestText'>Under Construction</h3>
		<div>
      <p className='threeStars'>{'\u2728'}</p>
		</div>
	  </div>
	  </div>
    )
   }
}
