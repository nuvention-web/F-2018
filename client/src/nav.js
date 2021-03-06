import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import './nav.css';
import logo from './static/logo.png'
import {Link} from 'react-router-dom';

class TopNav extends React.Component {
	state = {
		auth: false,
		slide: "-60px",  // How much should the Navbar slide up or down
		lastScrollY: 300,  // Keep track of current position in state
	  };

	  componentWillMount() {
		// When this component mounts, begin listening for scroll changes
		window.addEventListener('scroll', this.handleScroll);
	  }
	
	  componentWillUnmount() {
		// If this component is unmounted, stop listening
		window.removeEventListener('scroll', this.handleScroll);
	  }
	
	  handleScroll = () => {
		const { lastScrollY } = this.state; 
		const currentScrollY = window.scrollY;
	
	
		if (currentScrollY > lastScrollY) {
		  this.setState({ slide: '0px' });
		} else {
		  this.setState({ slide: '-60px' });
		}
		// this.setState({ lastScrollY: currentScrollY });
	  };




	render() {
		return (
		<Navbar className="navbar-norm" collapseOnSelect fixedTop fluid 
		style={{
			transform: `translate(0, ${this.state.slide})`,
			transition: 'transform 150ms linear',
		  }}
		  >
			<Navbar.Header>
				<Navbar.Brand>
					<a href="/" className="Name">
						<div className="top-logo"><img className="logo" src={logo}/></div>
					</a>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav>
				<NavItem eventKey={1} href="#">
					<span className="reinvent">Reinvent</span>
				</NavItem>
				<NavItem href="#">
				<span className="inspire">Inspire</span>
				</NavItem>
				{/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
					<MenuItem eventKey={3.1}></MenuItem>
					<MenuItem eventKey={3.2}>Another action</MenuItem>
					<MenuItem eventKey={3.3}>Search </MenuItem>
					<MenuItem divider />
					<MenuItem eventKey={3.3}>Separated link</MenuItem>
				</NavDropdown> */}
				</Nav>
				<Nav pullRight>
				<NavItem eventKey={1}>
					<Link to="/login"><span className="SignUp">Login</span></Link>
				</NavItem>
				</Nav>
			</Navbar.Collapse>
			</Navbar>
		)
	}
}

export default TopNav;