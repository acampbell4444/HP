import React, { Component } from 'react'
import Accordion from 'react-responsive-accordion'

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

          <div data-trigger="Q: Where do we meet you? How do we find the boat?">
            <p className="answer flex">If you make a reservation- we will make sure to contact you over the phone to arrange the exact details of how to meet us. If desired, we can meet you on the lake, and transfer from your boat. For land pickups- we will arrange a convenient meeting point for both parties. We are currently working on terms for a central location.</p>
          </div>    

          <div data-trigger="Q: How long are the flight times?">
            <p className="answer flex">Flights range from 8 minutes up to 10 minutes. The 800' flight is a couple minutes longer than the 600' flight.</p>
          </div>

          <div data-trigger="Q: How much does it cost to go parasailing?">
            <p className="answer flex">800 ft. Flight : $70 per person<br/>
            600 ft. Flight : $60 per person<br/>
            Non-Flying passenger : $20 per person </p>
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
            <p className="answer flex">After getting outfitted with a life vest and harness, you're seated on the flight deck of the boat. Once seated the mate clips your harness to the parachute. The captain then presses a button and up you go real nice and smooth, just like sitting on a swing set that slowly elevates you for the experience of a lifetime. And yes, all take offs and landings are done straight from the boat.</p>
          </div>          

          <div data-trigger="Q: What happens if the boat or towline breaks?">
            <p className="answer flex">If this happens, the participants will slowly and safely descend into the water. The mandatory lifejackets will hold the participants up until which time they are pulled back onto the boat. The parasail will not sink or go over your head. Prior to your flight the captain will give all participants a full safety briefing.</p>
          </div>          

          <div data-trigger="Q: What should I wear and leave behind?">
            <p className="answer flex">Dress for the weather, if it is cool before your flight or you are sensitive to the sun, we recommend that you wear a long sleeved shirt/ sweatshirt. Bathing suits and beach attire is always recommended, as are towels, bottled water and sun block. We recommend you leave behind anything that can be damaged by contact with water as well as anything that is expensive or hard to replace. We are not responsible for any damaged or lost items.</p>
          </div>

          <div data-trigger="Q: Can I take my camera up with me?">
            <p className="answer flex">You are allowed to take a camera up at your own discretion, and should take into consideration the height and water risks. Disposable cameras are best. We also offer a digital photo package as another option to capture your good times.</p>
          </div>           

          <div data-trigger="Q: What photo package do we offer?">
            <p className="answer flex">The digital photo package includes 30 photos of your adventure. The crew uses a high quality digital camera to document your entire flight and at the end of the trip you get the memory card to help with bragging rights.</p>
          </div>                       
          
          <div data-trigger="Q: What are your cancellation and refund policies?">
            <p className="answer flex">Please cancel one day prior to your reservation for a full refund. Gift Certificates & Retail: We do not refund gift certificates or retail purchases. However, gift certificates are good until they are used.</p>
          </div>            

          <div data-trigger="Q: What if it rains or is extremely windy?">
            <p className="answer flex"> A little sprinkle and we stay out. High gusty winds also make parasailing difficult. The captain then decides if we are going on stand-by or if we close down for the day. If you weren't able to fly then you can either be refunded or rescheduled for a day when we think the sun will come out to play again. If you are unsure about the weather conditions, please give us a call the day of your flight.</p>
          </div>

          <div data-trigger="Q: What part of our vacation should we plan parasailing for?">
            <p className="answer flex">We encourage you to plan for parasailing during the first part of your vacation. That way, if the weather does not cooperate you will have other opportunities to fly.</p>
          </div>              
           
          <div data-trigger="Q: What form of payment do you accept?">
            <p className="answer flex">We accept Cash, Debit Cards, MasterCard, Visa, Discover, or American Express.</p>
          </div>           

          <div data-trigger="Q: Is it customary to tip the crew?">
            <p className="answer flex">Yes, if they deserve it. Charter boat workers are part of the service industry. We will do our best to meet your expectations and leave you with a smile.</p>
          </div>     
 

        </Accordion>

    </div>
    )
  }
}