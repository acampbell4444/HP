import React, { Component } from 'react'

export default class Landscaping extends Component {
  
  componentDidMount() {
  	document.body.style.backgroundImage = "url('images/brownstucco.jpg')"
  	window.scrollTo(0, 0)
  }

  render() {
    return (
      <div id='pageContainer'>
        <div id='harvestCanvas'>
          <h1 id='rainHarvestTitle'>LANDSCAPING</h1>
            <h3 id='harvestText'>Reduce your carbon footprint by using Gator Backed Solutions for your landscaping needs. <br/><br/>
             What sets us apart from the rest is our approach to keeping your lawn and garden healthy. We will cut the grass, plant and maintain gardens and composts.<br/><br/>
             Depending on the size of the garden you can drastically offset your carbon footprint. Lower the amount of garbage you send to the landfill while creating new active organic compost. 
             <br/><br/> Be a part of the solution when you use Gator Backed Solutions.</h3>
		         <div className='container'>
               <p className='threeStars'>{'\u2728'}</p>
		         </div>
	        </div>
	    </div>
    )
   }
}
