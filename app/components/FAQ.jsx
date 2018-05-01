import React, { Component } from 'react'
import Accordion from 'react-responsive-accordion'
import { hashHistory } from 'react-router'

export default class FAQ extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div id='faqContainer'>

      <h1 id='faqTitle'>Frequently Asked Questions</h1>
        
      <Accordion 
                 transitionTime={200}
                 startPosition={200}
      >

          <div data-trigger="Q: Where are you located? How do we find the boat?">
            <p className="answer flex">We operate out of the Nautical Beach Resort. You sign up with Nautical Watersports
            , and they will direct you to our boat. <a onClick={e => hashHistory.push('location')}> 1000 McCulloch Blvd, Lake Havasu City, AZ 86403.</a> Off-site pickups are available for an extra fee, if previously arranged by phone.</p>
          </div>    

          <div data-trigger="Q: How long are the flight times?">
            <p className="answer flex">Flights range from 8 minutes up to 10 minutes. The 800' flight is a couple minutes longer than the 600' flight.</p>
          </div>

          <div data-trigger="Q: How much does it cost to go parasailing?">
            <p className="answer flex">800 ft. Flight : $79 per person<br/>
            600 ft. Flight : $69 per person<br/>
            Non-Flying passenger : $25 per person </p>
          </div> 

          <div data-trigger="Q: Do I have to get wet?">
            <p className="answer flex">No. You take off and land on our over-sized flight deck. 99% of landings are so smooth and slow that you could balance a glass of water without spilling a drop. If you want a dip at the end of your ride- we can slow down the boat and dip your legs in the water. We will then lift you back into the air- and slowly reel you back onto the boat with our hydraulic winch.</p>
          </div>  

          <div data-trigger="Q: How long does the entire trip take?">
            <p className="answer flex">We shoot for about an hour- but exact times can vary depending on the pickup location of our passengers, and the weather conditions.</p>
          </div>          

          <div data-trigger="Q: Do I need prior experience?">
            <p className="answer flex">Prior experience is not necessary. The captain and mate do ALL the work for you. You just have to come prepared to have a good time. If you can sit, you can fly!</p>
          </div>          

          <div data-trigger="Q: Do I need to know how to swim?">
            <p className="answer flex">No. You take off and land on the boat. In the very rare event of a water landing- your lifejacket will keep you afloat. If this happens, all you need to do is remain calm and float- and you will be back on the boat in no time.</p>
          </div>          


          <div data-trigger="Q: Can I go if I'm pregnant?">
            <p className="answer flex">No. Out of precaution, you cannot parasail, or ride on the boat. But come back next year!</p>
          </div>          

          <div data-trigger="Q: Can I go if I have suffered spinal, back, or neck injuries in the past?">
            <p className="answer flex">No. Occasional bumps on the boat are not good for these conditions.</p>
          </div>          

          <div data-trigger="Q: How old do I need to be to fly?">
            <p className="answer flex">Parasailors must be at least 4 years old to parasail. Guests under 18 must be signed in by a supervisor or guardian.</p>
          </div>          

          <div data-trigger="Q: Can I go up with someone else?">
            <p className="answer flex"> Yes, we offer tandem and triple flights (2 or 3 people in the air at the same time). Multi-passenger flights are side by side offering great views and comfortable flights. If the combined weight is over 400 pounds, the captain will determine if it is safe based on the weather conditions. Wind makes a big difference.</p>
          </div>          

          <div data-trigger="Q: Is there a weight restriction?">
            <p className="answer flex">Yes. Depending on the windspeed at the time of the trip. Typically the minimum weight in the chute is 100 lbs, and the maximum weight is 450-500 lbs.</p>
          </div>
           

          <div data-trigger="Q: What if I change my mind when I'm already on the boat?">
            <p className="answer flex"> This does not happen very often. Unfortunately, we cannot offer a refund after the trip has started.</p>
          </div>          

          <div data-trigger="Q: Can I go on the boat to watch but not necessarily go up?">
            <p className="answer flex">We do not take observer reservations. Right before the boat departs, IF there is room on the boat we will welcome you on the boat as an observer. The cost for that is $20. If you change your mind while on the boat and decide to fly, the $20 charge is then applied to the cost of parasailing.</p>
          </div>

          <div data-trigger="Q: How does parasailing work?">
            <p className="answer flex"> We point the boat into the wind and inflate the parachute. You slowly walk to the back of the boat and sit below the parachute, where we clip you in via your safety harness. The captain slowly lets out the winch and the parachute brings you up slow and steady into the sky. When the trip is over, we reel you back in- and you land gently on your rear-end - right where you started!</p>
          </div>          

          <div data-trigger="Q: What happens if the boat or towline breaks?">
            <p className="answer flex">Not a big deal. This is why we parasail over water- in case we need to make a water landing! If there is a towline or mechanical failure, you will slowly descend and land in the water- where your lifejacket will keep you afloat. The parachute will collapse behind you- and we will assist you back onto the boat.</p>
          </div>          

          <div data-trigger="Q: What should I bring?">
            <p className="answer flex">Swimsuit, towel, sunscreen, warm clothes if necessary, cash and/or credit card, smile, sense of adventure.</p>
          </div>

          <div data-trigger="Q: Can I take my camera up with me?">
            <p className="answer flex">Yes, at your own risk. We do offer a GoPro rental that you can take up with you, that is securely fixed to your wrist. We also offer a photo package from the boat.</p>
          </div>           

          <div data-trigger="Q: What photo package do we offer?">
            <p className="answer flex">The digital photo package includes over 30 pictures of your adventure on a high quality SD card that you get to keep! If you have a group, we use one card for everyone. The GoPro video option is where you take the camera in the air with you and capture the trip from up high.</p>
          </div>                       
          
          <div data-trigger="Q: What are your cancellation and refund policies?">
            <p className="answer flex">Must cancel 24 hours prior to trip for a full refund.</p>
          </div>            

          <div data-trigger="Q: What if it rains or is extremely windy?">
            <p className="answer flex">We will reschedule. We take safety very seriously, and only parasail in consistent, predictable, and reliable conditions.</p>
          </div>

          <div data-trigger="Q: What part of our vacation should we plan parasailing for?">
            <p className="answer flex">The first part- in case we need to reschedule due to weather or other reasons. Don't wait until the last minute! </p>
          </div>              
           
          <div data-trigger="Q: What form of payment do you accept?">
            <p className="answer flex">We accept Cash, Debit Cards, MasterCard, Visa, Discover, or American Express.</p>
          </div>           

          <div data-trigger="Q: Is it customary to tip the crew?">
            <p className="answer flex">Yes, if they deserve it. Charter boat workers are part of the general service industry. We will do our best to meet your expectations and leave you with a smile.</p>
          </div>     
 

        </Accordion>

    </div>
    )
  }
}