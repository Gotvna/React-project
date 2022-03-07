import React from "react"
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const MyArticleCard = (props) => {
  return(
    <Card id="Card">
      <Card.Body>
        <Card.Title>{this.props.articles.attributes.name}</Card.Title> 
        <Card.Text>
          {this.props.article.attributes.description} <br />
          price: {this.props.article.attributes.price} <br />
        </Card.Text>
        <Button variant="primary" className="bg-dark" ><Link to={"/article/"+props.article.id}>details</Link></Button>
      </Card.Body>
    </Card>
  );
}
export default MyArticleCard;