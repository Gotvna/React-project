import React from "react"
import { Card, Button } from 'react-bootstrap';

const MyCard = (props) => {
  return(
    <Card id="Card">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.categorie.attributes.name}</Card.Title> 
        <Card.Text>
          Descriptions: {props.categorie.attributes.description} <br />
          min price: {props.categorie.attributes.minprice} <br />
          max price: {props.categorie.attributes.maxprice} <br />
        </Card.Text>
        <Button variant="primary">Plus d'articles</Button>
      </Card.Body>
    </Card>
  );
}
export default MyCard;