import React, { Component} from "react"
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

class Cart extends Component {
  constructor(props){
    super(props);
  }
  
 
render() { 
  console.log(this.props)
  console.log(this.cart, "cart")
  let somme = 0;

		  this.props.cart.forEach(element => {
			  somme += element.article.attributes.price * element.count;		
		    });
    return(
      <div className="App">
        <Navigation categories={this.props.categories} cart={this.props.cart} sticky="top"/>
        <Container>
          <Row>
            <Col md="12">
              <Card id="CartPanier">
                <Card.Body>
                  <Card.Title>Votre Panier</Card.Title>
                  <Card.Text>
                    Total to pay: {somme}€<br />
                    <Button variant="primary">Procede to the payment</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {this.props.cart.map((cart,i)=><Col xd={12} md={{ span: 5 }} >
              <Card id="Card" style={{width:'450px'}}>
                <Row>
                  <Col md="4">
                {<Card.Img  src={`http://localhost:1337${cart.article.attributes.image.data.attributes.url}`} className="fluid"/>}
                  </Col>
                  <Col md="6">
                <Card.Body>
                  <Card.Title>{cart.article.attributes.name}</Card.Title> 
                  <Card.Text>
                    price: {cart.article.attributes.price}€ <br />
                    Quantity : {cart.count} <br />
                    <br />
                    <Button variant="primary" onClick={() => this.props.removeFromCart(i)} >Remove every items</Button>         
                  </Card.Text>
                </Card.Body>
              </Col></Row></Card><br/>
            </Col>)} 
            
          </Row>
        </Container>
        <Footer sticky="bottom"/>
      </div>
    );
}
}


export default Cart;