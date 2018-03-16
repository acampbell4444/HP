import React, { Component } from 'react'

export default class Gallery extends Component {
  
  componentDidMount() {
  	window.scrollTo(0, 0)
  }

  render() {
    return (
      <div id='pageContainer'>
      <div id='harvestCanvas'>
      <h1 id='rainHarvestTitle'>Gallery</h1>
      <h3 id='harvestText'>Under Construction</h3>
	  </div>
	  </div>
    )
   }
}
