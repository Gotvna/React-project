import React from "react"
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const MyArticleCard = (props) => {
  return(
    <Card id="Card" style={{backgroundImage: 'url(${http://localhost:1337/uploads/pinceau_01_681c5ec1aa.jfif?updated_at=2022-03-07T15:55:24.836Z})'}}>
      <Card.Body>
        <Card.Title>{props.article.attributes.name}</Card.Title> 
        <Card.Text>
          {props.article.attributes.description} <br />
          price: {props.article.attributes.price} <br />
        </Card.Text>
        <Button variant="primary" className="bg-dark" ><Link to={"/article/"+props.article.id}>details</Link></Button>
      </Card.Body>
    </Card>
  );
}
export default MyArticleCard;