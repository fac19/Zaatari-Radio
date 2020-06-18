import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavBar() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="#home">HumaniBase</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#features">Home</Nav.Link>
					<Nav.Link href="#pricing">Find Workshops</Nav.Link>
					<Nav.Link href="#pricing">Contact</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
