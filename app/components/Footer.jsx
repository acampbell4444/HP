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
         <a id='footerText2' href="tel:928-575-5043" > 928-575-5043</a>
        </p>
      </div>
    </div>
    )
  }
}
