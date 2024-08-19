import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaShoppingCart, FaBell, FaUser, FaCog } from 'react-icons/fa';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
      <Navbar.Brand href="/">GTOKEN</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/profil"><FaUser /> Profil</Nav.Link>
          <Nav.Link href="/panier"><FaShoppingCart /></Nav.Link>
          <Nav.Link href="/notifications"><FaBell /></Nav.Link>
          <Nav.Link href="/logout"><FaCog /> Déconnexion</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
