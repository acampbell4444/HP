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
          <h1 id='rainHarvestTitle'>SUSTAINABLE SOLUTIONS</h1>
	      <h3 id='harvestText'>
			Serving the front range of northern Colorado. GatorBacked Solutions provides more than 25 combined years of service to the community.<br/><br/>
			We have developed methods with conscious efforts made toward improving the way we impact the environment. Approaching design opportunities with economic and environmental solutions that custom fit any project or budget.<br/><br/>
			We have made a decision to provide our clients with a sustainable environmentally safe alternative to residential and commercial construction, or renovation.
	      </h3>
		<div className='cont'>
			<div id='dorkGuyVid'>
			
			    <video controls> 
			     <source src="images/dorkyGuy.mp4" />
			      <object data="video.swf" type="application/x-shockwave-flash" width="300" height="00"> 
			       <param name="quality" value="high" />
				   <param name="menu" value="false" />
			      </object>
			    </video>
			    <figcaption><i>Preparing For A Future</i></figcaption>
			    <div className='cont'>
                 <p className='threeStars'>{'\u2728'}</p>
		        </div>
			
		    </div>
		 </div>
	    </div>
	  </div>
    )
   }
}

