import React, { Component } from "react";
import Navigation from './components/Navigation';
import MyCard from './components/MyCard';
import Footer from './components/Footer';
import { Row, Container} from 'react-bootstrap';



class Category extends Component {

    constructor(props){
        super(props)
        this.state={
           articles:[]
        }
      }

    async componentDidMount() {
    //generalement utilisé pour les appels réseaux
    const response = await fetch('http://localhost:1337/api/categories?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const articles = await response.json()
    this.setState({articles:articles})

    }
    render() {
        return(
            <div className="Category">
               <Navigation articles={this.state.articles} />
                <br />
                <Container>
                    <Row>
                        {this.state.articles.data && this.state.articles.data.map((article,i)=><MyCard article={article} />)}
                    </Row>  
                </Container>
                <Footer />
            </div>
        );
    }
}
export default Category;