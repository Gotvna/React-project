import React, { Component} from "react"
import { Row, Col, Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Link } from "react-router-dom";
import CardArticle from './components/MyCard';

class Cart extends Component {
  
render() {
    return(
      <div className="App">
        <Navigation categories={this.props.categories} cart={this.props.cart} sticky="top"/>
        <Container>
          <Row className="align-items-center vh-100">
            {this.props.cart.data && this.props.cart.data.map((cart,i)=><Col xd={12} md={{ span: 3 }}>
              <CardArticle cart={cart} />
            </Col>)}
          </Row>  
        </Container>
        <Footer sticky="bottom"/>
      </div>
    );
}
}


export default Cart;