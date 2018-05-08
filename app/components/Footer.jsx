import React, { Component } from 'react'
import { hashHistory } from 'react-router'

export default class Footer extends Component {

  render() {
    return (
    <div>
      <div id='footer'>
        <p>
         <span id='footerText1' onClick={e => hashHistory.push('home')}> 
           Havasu Parasail  
        </span> 
         {/*<span id='dot'> • </span>*/}
         {/*<a id='footerText2' href="tel:928-575-5043" > 928-575-5043</a>*/}
         <span id='dot2'> • </span>
         <span id='footerText3'>Lake Havasu City, AZ</span>
        </p>
      </div>
    </div>
    )
  }
}
