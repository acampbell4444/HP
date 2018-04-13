import React, { Component } from 'react'
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Image, ButtonGroup, Button } from 'react-bootstrap'
import { hashHistory } from 'react-router'
import Icon from 'react-icons-kit'
import { facebook } from 'react-icons-kit/icomoon/facebook'
import { instagram } from 'react-icons-kit/icomoon/instagram'
 import { phone } from 'react-icons-kit/icomoon/phone'


export default class NavBar extends Component {

  state = {toggleNav:false, redLogo: false}

  render() {
  	const rte = this.props.currentRoute
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
						hashHistory.push('home')
						this.setState({toggleNav: false})
					 }}

			>   
			    <div id='navBarLogo'>
				<Image src={rte === 'home' || this.state.redLogo ? 'images/parasailLogoRed.png' : 'images/parasailLogo.png' }
				 onMouseEnter={e => this.setState({redLogo:true})}
				 onMouseLeave={e => this.setState({redLogo:false})}
				 rounded responsive id='logopic' />
				</div>
				<p id='bizName' 
 					onMouseEnter={e => this.setState({redLogo:true})}
				    onMouseLeave={e => this.setState({redLogo:false})}
				   style={{'color': this.state.redLogo || rte === 'home'? '#DB4C3F' : 'white'}}>Havasu Parasail
				 </p>
			</NavItem>
			</div>
		  </Navbar.Brand>
		  <Navbar.Toggle id='toggleNav'
		  				 ref='toggleDiv'

		  />
	    </Navbar.Header>
		<Navbar.Collapse>
		  <Nav pullRight>

		   <NavItem eventKey={1} href="#" 
		   			onClick={e => hashHistory.push('home')} 
		   >
		     <span id='navLinkTextfirst' style={{color: rte == 'home' ? '#DB4C3F' : 'white'}}> home </span>
		   </NavItem>

		   <NavItem eventKey={2} href="#" 
		   			onClick={e => hashHistory.push('reservations')} 
		   >
		      <span id='navLinkTextSecond' style={{color: rte == 'reservations' ? '#DB4C3F' : 'white'}}> reservations </span>
		   </NavItem>		   
		   
		   <NavItem eventKey={3} href="#"
		   			onClick={e => hashHistory.push('gallery')}
		   >
		      <span id='navLinkText'style={{color: rte == 'gallery' ? '#DB4C3F' : 'white'}}> gallery </span>
		   </NavItem>
{/*		   <NavItem id='navLinkText' eventKey={4} href="#"
					onClick={e => hashHistory.push('contact')}
		   >
		      contact
		   </NavItem>*/}
		   <NavItem eventKey={5} href="#"
		   			onClick={e => hashHistory.push('faq')}
		   >
		      <span id='navLinkText' style={{color: rte == 'FAQ' ? '#DB4C3F' : 'white'}}> faq </span>
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
		      
		      <a href="tel:928-575-5043" >
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

