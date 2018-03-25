import React, { Component } from 'react'
import Gallery from 'react-grid-gallery'

export default class Gall extends Component {
  
  componentDidMount() {
  	window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <div id='galleryCanvas'>
          <h1 id='galleryTitle'>Gallery</h1>
            <Gallery images={IMAGES}
                     lightboxWillClose={e => console.log('closed')}
                     lightboxWillOpen={e => console.log('opened')}
                     backdropClosesModal={true}
            />
  	    </div>
        <div id='afterGallery'></div>
      </div>
    )
   }
}

const IMAGES =
[{
        src: '/images/havasuParasail.jpg',
        thumbnail: '/images/havasuParasail.jpg',
        thumbnailWidth: 240,
        thumbnailHeight: 174,
        tags: [{value: 'Desert Oasis', title: '1'}],
        caption: 'An experience like nothing else. Almost too good to be true.'
},
{
        src: "/images/aerial3.jpg",
        thumbnail: "/images/aerial3.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 174,
        tags: [{value: 'Flying High', title: '1'}],
        caption: 'Change your Altitude!'
},{
        src: '/images/havasuSunset.jpg',
        thumbnail: '/images/havasuSunset.jpg',
        thumbnailWidth: 240,
        thumbnailHeight: 174,
        tags: [{value: "Raw Havasu", title: '1'}],
        caption: 'Lake Havasu has a harsh, primitive beauty. We like to give you the chance to experience it from all angles.'
},
{
        src: '/images/arialClear.jpg',
        thumbnail: '/images/arialClear.jpg',
        thumbnailWidth: 240,
        thumbnailHeight: 174,
        tags: [{value: "GoPro", title: '1'}],
        caption: "Capture this one-of-a-time experience with our GoPro Rental."
},
{
        src: '/images/havasuPano.jpg',
        thumbnail:'/images/havasuPano.jpg',
        thumbnailWidth: 240,
        thumbnailHeight: 174,
        tags: [{value: "High Times", title: '1'}],
        caption: "It's ok if you're up late hooting with the owls. Just make sure to come and soar with the eagles the next day."
},
{
        src: '/images/lotOfBalloons.jpg',
        thumbnail:'/images/lotOfBalloons.jpg',
        thumbnailWidth: 240,
        thumbnailHeight: 174,
        tags: [{value: "Balloon Mania", title: '1'}],
        caption: "We won't put you up in a hot air balloon, but as you slowly ride the thermals to 800'- the experience is similar!"
},
{
        src: '/images/dip2.jpg',
        thumbnail:'/images/dip2.jpg',
        thumbnailWidth: 240,
        thumbnailHeight: 174,
        tags: [{value: 'Take a Dip?', title: '1'}],
        caption: 'If you choose- we can slow down at the end of the ride- and smoothly dip you in the water. For those that want a bit more- we can dip you up to your chest. You then ascend back into the air- and land gently on the boat.'
},
{
        src: '/images/waSmiley.jpg',
        thumbnail:'/images/waSmiley.jpg',
        thumbnailWidth: 240,
        thumbnailHeight: 174,
        tags: [{value: 'Experienced Captain', title: '1'}],
        caption: "Your captain has been parasailing for 15 years, and carries a 100 ton US Coast Guard Commercial License. He has flown over 50,000 people with a 100% safety record. Your safety is our #1 priority."
},
{
        src: '/images/parasailwatercolor.jpg',
        thumbnail:'/images/parasailwatercolor.jpg',
        thumbnailWidth: 240,
        thumbnailHeight: 174,
        tags: [{value: 'Paint the Sky', title: '1'}],
        caption: "Like a dream."
},
{
        src: '/images/caliPalms.jpg',
        thumbnail:'/images/caliPalms.jpg',
        thumbnailWidth: 240,
        thumbnailHeight: 174,
        tags: [{value: 'Surreal', title: '1'}],
        caption: 'This is your happy zone.'
},
{
        src: '/images/captainsGirl.jpg',
        thumbnail:'/images/captainsGirl.jpg',
        thumbnailWidth: 140,
        thumbnailHeight: 174,
        tags: [{value: 'Smiles Happen', title: '1'}],
        caption: "Kids love parasailing. Kids 4 and over are welcome to fly with a legal guardian."
},
]
