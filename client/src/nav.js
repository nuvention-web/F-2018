import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import './nav.css';


class TopNav extends React.Component {
	render() {
		return (
		<Navbar className="nav" collapseOnSelect fixedTop fluid>
			<Navbar.Header>
				<Navbar.Brand>
				<a href="#brand">Monarch</a>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav>
				<NavItem eventKey={1} href="#">
					Link
				</NavItem>
				<NavItem eventKey={2} href="#">
					Link
				</NavItem>
				<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
					<MenuItem eventKey={3.1}></MenuItem>
					<MenuItem eventKey={3.2}>Another action</MenuItem>
					<MenuItem eventKey={3.3}>Search </MenuItem>
					<MenuItem divider />
					<MenuItem eventKey={3.3}>Separated link</MenuItem>
				</NavDropdown>
				</Nav>
				<Nav pullRight>
				<NavItem eventKey={1} href="#">
					<span className="SignUp" >Sign Up</span>
				</NavItem>
				</Nav>
			</Navbar.Collapse>
			</Navbar>
		)
	}
}

export default TopNav;