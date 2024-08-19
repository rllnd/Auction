import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaBell, FaUser, FaCog } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="/">GTOKEN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/home">Accueil</Nav.Link>
            <NavDropdown title="Catégories" id="basic-nav-dropdown">
              <NavDropdown.Item href="/categorie/art">Art</NavDropdown.Item>
              <NavDropdown.Item href="/categorie/musique">Musique</NavDropdown.Item>
              <NavDropdown.Item href="/categorie/sculpture">Sculpture</NavDropdown.Item>
              <NavDropdown.Item href="/categorie/vêtements">Vêtements</NavDropdown.Item>
              <NavDropdown.Item href="/categorie/autres">Autres</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/mes-encheres">Mes Enchères</Nav.Link>
            <Nav.Link href="/tokens">Mes Tokens</Nav.Link>
            <Nav.Link href="/dashboard">Tableau de bord</Nav.Link>
            <Nav.Link href="/profil">
              <FaUser /> Profil
            </Nav.Link>
            <Nav.Link href="/panier">
              <FaShoppingCart />
            </Nav.Link>
            <Nav.Link href="/notifications">
              <FaBell />
            </Nav.Link>
            <NavDropdown title={<FaCog />} id="settings-dropdown">
              <NavDropdown.Item href="/logout">Déconnexion</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
