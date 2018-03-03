import React, { Component } from 'react'

export default class RainHarvest extends Component {
  
  componentDidMount() {
    document.body.style.backgroundImage = "url('images/woodBackground.jpg')"
  	window.scrollTo(0, 0)
  }

  render() {
    return (
      <div id='pageContainer'>
      <div id='harvestCanvas'>
      <h1 id='rainHarvestTitle'>RAIN HARVESTING</h1>
      <h3 id='harvestText'>Protecting the water we drink and use should be a top concern in today's world.
      The amount of fresh usable
      <a href='http://water.usgs.gov/edu/waterquality.html'  target="_blank"> water </a>
      is around 30% of the total supply on earth. The more we pollute the smaller that number becomes.<br/><br/>
       Help to be a part of the solution by harvesting natural rain water.<br/><br/>
       Naturally harvested rain water is free because it uses gravity. It uses gravity in the collection and in the delivery process. This makes rain water a far better solution for watering plants lawns and gardens.
       <br/><br/> No chemicals added in the treatment of the water helps in greener plants and lawns. Gator Backed Solutions has a rain harvesting solution for any budget. From the rain barrel to landscaped ponds and wildlife refuges.</h3>
		<div className='container'>
		  <div className="cloud">
		    <div className="puffs"></div>
		    <div className="rain">
		      <div className="drop"></div>
			  <div className="drop"></div>
			  <div className="drop"></div>
			  <div className="drop"></div>
			  <div className="drop"></div>
		    </div>
		  </div>
		</div>
	  </div>
	  </div>
    )
   }
}
