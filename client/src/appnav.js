import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import './nav.css';
import {Link} from 'react-router-dom'
import logo from './static/logo.png'
import avatar from './static/avatar-inside-a-circle.png'

var avatarStyle = {
	paddingBottom: "0",
	paddingTop: "5px"
}


class AppNav extends React.Component {

    //  APP NAV
    //This nav doesn't need any scroll animations like the landing page one,
    //which is why I decided to duplicate the component.  Is this the easiest way?

	// state = {
	// 	auth: false,
	// 	slide: "-53px",  // How much should the Navbar slide up or down
	// 	lastScrollY: 300,  // Keep track of current position in state
	//   };

	//   componentWillMount() {
	// 	// When this component mounts, begin listening for scroll changes
	// 	window.addEventListener('scroll', this.handleScroll);
	//   }
	
	//   componentWillUnmount() {
	// 	// If this component is unmounted, stop listening
	// 	window.removeEventListener('scroll', this.handleScroll);
	//   }
	
	//   handleScroll = () => {
	// 	const { lastScrollY } = this.state; 
	// 	const currentScrollY = window.scrollY;
	
	
	// 	if (currentScrollY > lastScrollY) {
	// 	  this.setState({ slide: '0px' });
	// 	} else {
	// 	  this.setState({ slide: '-53px' });
	// 	}
	// 	// this.setState({ lastScrollY: currentScrollY });
	//   };




	render() {
		return (
			<Navbar className="navbar-norm" collapseOnSelect fixedTop fluid >
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
					</Nav>
					<Nav pullRight>
					<NavDropdown eventKey={3} componentClass="avatar-logo-container" title={<span><i className="fa fa-user fa-fw"></i> <img className="avatar-logo "  src={avatar}/></span> }  id="basic-nav-dropdown">
						<MenuItem eventKey={3.1}></MenuItem>
						<MenuItem eventKey={3.2}><Link to="/profile">Profile</Link></MenuItem>
						<MenuItem eventKey={3.3}><Link to="/dashboard">Dashboard</Link></MenuItem>
						<MenuItem divider />
						<MenuItem eventKey={3.3}>Log Out</MenuItem>
					</NavDropdown>
					</Nav>
					
				</Navbar.Collapse>
				</Navbar>
		)
	}
}

export default AppNav;