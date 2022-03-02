import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Asian Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link id="link" to="/">Home</Link>
              <NavDropdown title="Articles" id="basic-nav-dropdown">
                <NavDropdown.Item className="bg-dark"><Link className="liste" to="./Article/Encre">Encre</Link></NavDropdown.Item>
                <NavDropdown.Item className="bg-dark"><Link className="liste" to="./Article/Pinceaux">Pinceaux</Link></NavDropdown.Item>
                <NavDropdown.Item className="bg-dark"><Link className="liste" to="./Article/Statuettes">Statuettes</Link></NavDropdown.Item>
                <NavDropdown.Item className="bg-dark"><Link className="liste" to="./Article/HabitsTrad">Habits Traditionnels</Link></NavDropdown.Item>
                <NavDropdown.Item className="bg-dark"><Link className="liste" to="./Article/Papiers">Papiers</Link></NavDropdown.Item>
                <NavDropdown.Item className="bg-dark"><Link className="liste" to="./Article/PorteBonheur">Porte-Bonheur</Link></NavDropdown.Item>
                <NavDropdown.Item className="bg-dark"><Link className="liste" to="./Article/Vases">Vases</Link></NavDropdown.Item>
                <NavDropdown.Item className="bg-dark"><Link className="liste" to="./Article/Encre">Encre</Link></NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Navigation;
