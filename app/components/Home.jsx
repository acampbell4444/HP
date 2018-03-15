import React, { Component } from 'react'

export default class Home extends Component {

  componentDidMount() {
  	document.body.style.backgroundImage = "url('images/woodBackground.jpg')"
  	window.scrollTo(0, 0)
  }

  render() {
    return (
      <div id='pageContainer'>
        <div id='harvestCanvas'>
          <h1 id='rainHarvestTitle'>HAVASU PARASAIL</h1>
	      <h3 id='harvestText'>
	        UNDER CONSTRUCTION
	      </h3>
	    </div>
	  </div>
    )
   }
}

