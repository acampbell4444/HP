import React, { Component } from 'react'
import { browserHistory } from 'react-router'

export default class Footer extends Component {

  render() {
    return (
    <div>
      <div id='footer'>
        <p>
         <span id='footerText1' onClick={e => browserHistory.push('home')}> 
           GatorBacked Solutions  
        </span> 
         <span id='dot'> • </span>
         <a id='footerText2' href="tel:970-347-0474" > (970) 347-0474</a>
        </p>
      </div>
    </div>
    )
  }
}
