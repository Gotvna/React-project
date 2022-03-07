import React from "react"
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const MyArticleCard = (props) => {
  return(
    <Card id="Card" style={props.articles.attributes.image}>
      <Card.Body>
        <Card.Title>{props.articles.attributes.name}</Card.Title> 
        <Card.Text>
          {props.article.attributes.description} <br />
          min price: {props.article.attributes.minprice} <br />
          max price: {props.article.attributes.maxprice} <br />
        </Card.Text>
        <Button variant="primary" className="bg-dark" ><Link to={"/article/"+props.article.id}>details</Link></Button>
      </Card.Body>
    </Card>
  );
}
export default MyArticleCard;