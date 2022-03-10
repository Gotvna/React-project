import React, { Component, useState } from "react";
import Navigation from './components/Navigation';
import MyArticleCard from './components/MyArticleCard';
import Footer from './components/Footer';
import { Row, Col, Container} from 'react-bootstrap';

class Categorie extends Component {

    constructor(props){
        super(props)
        this.state={
          articles:[]
        }
      }

    async componentDidMount() {
        const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        const response = await fetch('http://localhost:1337/api/articles?populate=*&filters[categorie][id][$eq]='+id, {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
        const articles = await response.json()
        console.log(articles)
        this.setState({articles:articles})    
    }


    
    render() {
        return(
            <div className="App">
               <Navigation categories={this.props.categories} cart={this.props.cart} article={this.state.articles} sticky="top"/>
                <Container>
                    <Row className="align-items-center vh-100">
                        {this.state.articles.data && this.state.articles.data.map((article,i)=><Col xd={12} md={{ span: 3 }}>
                            <MyArticleCard article={article} addToCart={this.props.addToCart} saveCart={this.props.saveCart}/>
                        </Col>)}
                    </Row>  
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Categorie;