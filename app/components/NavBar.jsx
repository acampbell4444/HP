import React, { Component } from 'react'
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Image } from 'react-bootstrap'
import { browserHistory } from 'react-router'

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
		   <div id='navBarLogo'>
			<NavItem eventKey={6} 
					 onClick={e => {
						browserHistory.push('home')
						this.setState({toggleNav: false})
					 }}

			>
				<Image src="images/earth_small.png" rounded responsive />
			</NavItem>
			</div>
		  </Navbar.Brand>
		  <Navbar.Toggle id='toggleNav' onClick={e => console.log('pushed')} 
		  				 ref='toggleDiv'

		  />
	    </Navbar.Header>
		<Navbar.Collapse>
		  <Nav>

		   <NavItem id='navLinkTextfirst' eventKey={1} href="#" 
		   			onClick={e => browserHistory.push('home')} 
		   >
		      HOME
		   </NavItem>

		   <NavItem id='navLinkTextSecond' eventKey={2} href="#" 
		   			onClick={e => browserHistory.push('rainHarvest')} 
		   >
		      RAIN HARVESTING
		   </NavItem>		   
		   
		   <NavItem id='navLinkText' eventKey={3} href="#"
		   			onClick={e => browserHistory.push('remodeling')}
		   >
		      REMODELING
		   </NavItem>
		   <NavItem id='navLinkText' eventKey={4} href="#"
					onClick={e => browserHistory.push('landscaping')}
		   >
		      LANDSCAPING
		   </NavItem>
		   <NavItem id='navLinkText' eventKey={5} href="#"
		   			onClick={e => browserHistory.push('contact')}
		   >
		      CONTACT
		   </NavItem>
		  </Nav>

	    </Navbar.Collapse>
	  </Navbar>
	  </div>
    )
  }
}

