import React from "react"
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const CardArticle = (props) => {
  return(
    <Card id="Card">
      <Card.Img  src={`http://localhost:1337${props.cart.attributes.image.data.attributes.url}`} />
      <Card.Body>
        <Card.Title>{props.cart.attributes.name}</Card.Title> 
        <Card.Text>
          {props.cart.attributes.description} <br />
          price: {props.cart.attributes.price}€ <br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default CardArticle;