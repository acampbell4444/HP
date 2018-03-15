import React, { Component } from 'react'
import { browserHistory } from 'react-router'

export default class Footer extends Component {

  render() {
    return (
    <div>
      <div id='footer'>
        <p>
         <span id='footerText1' onClick={e => browserHistory.push('home')}> 
           Havasu Parasail  
        </span> 
         <span id='dot'> • </span>
         <a id='footerText2' href="tel:310-849-9353" > (310) 849-9353</a>
        </p>
      </div>
    </div>
    )
  }
}
