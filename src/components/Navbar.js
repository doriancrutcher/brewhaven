import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="border-bottom border-secondary">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-light">
          <img
            src="https://i.imgur.com/Q7LEpMT.png"
            height="40"
            className="d-inline-block align-top"
            alt="Brew Haven Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-light">Home</Nav.Link>
            <Nav.Link as={Link} to="/locations" className="text-light">Locations</Nav.Link>
            <Nav.Link as={Link} to="/menu" className="text-light">Menu</Nav.Link>
            <Nav.Link as={Link} to="/profile" className="text-light">Profile</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-light">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar; 