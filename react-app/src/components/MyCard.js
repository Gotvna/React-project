import React from "react"
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const MyCard = (props) => {
  return(
    <Card id="Card" style={props.categorie.attributes.image}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.categorie.attributes.name}</Card.Title> 
        <Card.Text>
          {props.categorie.attributes.description} <br />
          min price: {props.categorie.attributes.minprice} <br />
          max price: {props.categorie.attributes.maxprice} <br />
        </Card.Text>
        <Button variant="primary" className="bg-dark" ><Link to={"/categorie/"+props.categorie.id}>Plus d'articles</Link></Button>
      </Card.Body>
    </Card>
  );
}
export default MyCard;