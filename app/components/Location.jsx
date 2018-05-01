import React, { Component } from 'react'

export default class Contact extends Component {
  
  componentDidMount() {
  	window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>


        <div id='galleryCanvas'>
          <h1 id='galleryTitle'>Location</h1>
               <p id='locationText2'>Coming Soon!</p>
          {/*<p id='locationText'>
            We are located at the Nautical Watersports Center. Our address is: <br/>
            <a target="_blank" href="https://www.google.com/maps/place/Nautical+Watersports/@34.457933,-114.349707,17z/data=!4m5!3m4!1s0x0:0x4e713bf818297da5!8m2!3d34.4579332!4d-114.3497066?hl=en-US">
             1000 McCulloch Blvd, Lake Havasu City, AZ 86403. <br/>Click here for a larger map.
            </a>
          </p>
          <div className='container' >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.7720771633344!2d-114.351895285399!3d34.45793318049741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d1ed9e43689d93%3A0x4e713bf818297da5!2sNautical+Watersports!5e0!3m2!1sen!2sus!4v1525141521938"
              width="100%" height="600" frameBorder="0" style={{"border":0}} allowFullScreen>
            </iframe>
          </div>*/}
        </div>
        <div id='afterGallery'></div>
      </div>
    )
  }
}
