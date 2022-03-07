import React, { Component } from "react";
import Navigation from './components/Navigation';
import MyArticleCard from './components/MyArticleCard';
import Footer from './components/Footer';
import { Row, Col, Container} from 'react-bootstrap';
import { useLocation, useParams,useNavigate  } from "react-router-dom";


class CategorieInner extends Component {


    async componentDidMount() {
        //console.log(this.props.useParams());
        const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        const response = await fetch('http://localhost:1337/api/articles?populate=*&filters[categorie][id][$eq]='+id, {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
        const articles = await response.json()
        this.setState({articles:articles})

    }
    render() {
        return(
            <div className="App" >
               <Navigation categories={this.props.categories} sticky="top"/>
                <Container>
                    <Row className="align-items-center vh-100">
                        {this.state.articles.data && this.state.articles.data.map((article,i)=><Col xd={12} md={{ span: 3 }}>
                            <MyArticleCard article={article} />
                        </Col>)}
                    </Row>  
                </Container>
                <Footer />
            </div>
        );
    }
}

const Categorie = props => {
    return <CategorieInner useNavigate ={useNavigate} useLocation={useLocation} useParams={useParams} {...props} />
}
export default Categorie;