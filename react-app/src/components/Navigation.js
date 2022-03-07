import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const Navigation = (props) => {
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Asian Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link id="link" to="/">Home</Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                {props.categories.data && props.categories.data.map((categorie,i)=><NavDropdown.Item><Link to={"/categorie/"+categorie.id} >{categorie.attributes.name}</Link></NavDropdown.Item>)}
              
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Navigation;
