import React from "react"
import { Card, Button } from 'react-bootstrap';

const MyCard = () => {
  return(
    <Card id="Card">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Titre</Card.Title> 
        <Card.Text>
          Descriptions:<br />
          min price: <br />
          max price:<br />
        </Card.Text>
        <Button variant="primary">Plus d'articles</Button>
      </Card.Body>
    </Card>
  );
}
export default MyCard;