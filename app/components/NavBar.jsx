import React, { Component } from 'react'
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Image, ButtonGroup, Button } from 'react-bootstrap'
import { browserHistory } from 'react-router'
import Icon from 'react-icons-kit'
import { facebook } from 'react-icons-kit/icomoon/facebook'
import { instagram } from 'react-icons-kit/icomoon/instagram'
 import { phone } from 'react-icons-kit/icomoon/phone'


export default class NavBar extends Component {

  state = {toggleNav:false}

  render() {
    return (
      <div>
	  <Navbar inverse collapseOnSelect fixedTop={true} expanded={this.state.toggleNav}
	  		  onToggle = {e => this.state.toggleNav ? this.setState({toggleNav: false}) : this.setState({toggleNav: true})}
	  >
	    <Navbar.Header>
		  <Navbar.Brand>
		   <div>
			<NavItem eventKey={6} 
					 onClick={e => {
						browserHistory.push('home')
						this.setState({toggleNav: false})
					 }}

			>   
			    <div id='navBarLogo'>
				<Image src="images/parasailLogo.png" rounded responsive id='logopic' />
				</div>
				<p id='bizName'>Havasu Parasail</p>
			</NavItem>
			</div>
		  </Navbar.Brand>
		  <Navbar.Toggle id='toggleNav' onClick={e => console.log('pushed')} 
		  				 ref='toggleDiv'

		  />
	    </Navbar.Header>
		<Navbar.Collapse>
		  <Nav pullRight>

		   <NavItem id='navLinkTextfirst' eventKey={1} href="#" 
		   			onClick={e => browserHistory.push('home')} 
		   >
		      home
		   </NavItem>

		   <NavItem id='navLinkTextSecond' eventKey={2} href="#" 
		   			onClick={e => browserHistory.push('reservations')} 
		   >
		      reservations
		   </NavItem>		   
		   
		   <NavItem id='navLinkText' eventKey={3} href="#"
		   			onClick={e => browserHistory.push('gallery')}
		   >
		      gallery
		   </NavItem>
		   <NavItem id='navLinkText' eventKey={4} href="#"
					onClick={e => browserHistory.push('contact')}
		   >
		      contact
		   </NavItem>
		   <NavItem id='navLinkText' eventKey={5} href="#"
		   			onClick={e => browserHistory.push('faq')}
		   >
		      faq
		   </NavItem>
		  </Nav>

	    </Navbar.Collapse>
	      
	      <div className='navButtGroup'>
	      <div className='center'>
	        <ButtonGroup>
		      <Button className='navButt' id='facebook'
		              onClick={()=> window.open('https://www.facebook.com/havasuparasail/', '_blank')}>
                <Icon size={30} icon={facebook}></Icon>
		      </Button>
		      
		      <a href="tel:310-849-9353" >
		      <Button className='navButt' id='contact'>
		         <Icon size={30} icon={phone}></Icon>
		      </Button>
		      </a>
		    
		    </ButtonGroup>
		    <ButtonGroup>
		      <Button className='navButt' id='instagram' 
		              onClick={()=> window.open('https://www.instagram.com/lakehavasuparasailing/')}>
		         <Icon size={30} icon={instagram}></Icon>
		      </Button>
		    </ButtonGroup>
	      </div>
	      </div>
	  
	  </Navbar>
	  </div>
    )
  }
}

