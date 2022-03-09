import React from "react"
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";



const MyArticleCard = (props) => {
  
  return(
    <Card id="Card">
      <Card.Img  src={`http://localhost:1337${props.article.attributes.image.data.attributes.url}`} />
      <Card.Body>
        <Card.Title>{props.article.attributes.name}</Card.Title> 
        <Card.Text>
          {props.article.attributes.description} <br />
          price: {props.article.attributes.price}€ <br />
        </Card.Text>
        <Button variant="primary" className="bg-dark" ><Link to={"/article/"+props.article.id}>details</Link></Button>
        <Button variant="primary" className="bg-dark button-add" onClick={() => {
          props.addToCart(props.article)
          props.saveCart()
        }}>Ajouter au panier</Button>
      </Card.Body>
    </Card>
  );
}
export default MyArticleCard;