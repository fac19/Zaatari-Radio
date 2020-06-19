import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const NavLink = styled(Link)`
	color: inherit;
	text-decoration: none;

	&:hover {
		color: inherit;
		text-decoration: none;
	}
`;

export default function NavBar() {
	return (
		<Navbar id="NavBar" collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand>
				<NavLink to="/">HumaniBase</NavLink>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link>
						<NavLink to="/">Home</NavLink>
					</Nav.Link>
					<Nav.Link>
						<NavLink to="/workshops">Find Workshops</NavLink>
					</Nav.Link>
					<Nav.Link>
						<NavLink to="/contact">Contact</NavLink>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
