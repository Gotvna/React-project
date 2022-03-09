import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';

function refreshPage() {
  window.location.reload(false);
}

const Navigation = (props) => {
    console.log("props",props);
    let totalArticles=0;
    console.log(props.cart);
    if(props.cart.length>0){
      props.cart.forEach((article) => totalArticles+=article.count)
    }
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Asian Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link id="link" to="/">Home</Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                {props.categories.data && props.categories.data.map((categorie,i)=><NavDropdown.Item onClick={refreshPage}><Link to={"/categorie/"+categorie.id} >{categorie.attributes.name}</Link></NavDropdown.Item>)}
              
              </NavDropdown>
              <Button variant="primary" className="bg-dark float-end"><Link to={"/Cart"}>Go to cart ({totalArticles})</Link></Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Navigation;
