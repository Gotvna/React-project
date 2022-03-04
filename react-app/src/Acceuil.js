import React, { Component } from "react";
import Navigation from './components/Navigation';
import MyCard from './components/MyCard';
import Footer from './components/Footer';
import { Row, Col, Container} from 'react-bootstrap';


class Acceuil extends Component {

    constructor(props){
        super(props)
        this.state={
           categories:[]
        }
      }

    async componentDidMount() {
    //generalement utilisé pour les appels réseaux
    const response = await fetch('http://localhost:1337/api/categories?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const categories = await response.json()
    this.setState({categories:categories})

    }
    render() {
        console.log(this.state.categories);
        return(
            <div className="App">
                <Navigation sticky="top" />
                <br />
                <Container>
                    <Row>
                        {this.state.categories.data && this.state.categories.data.map((categorie,i)=><MyCard categorie={categorie} />)}
                    </Row>  
                </Container>
                <Footer />
            </div>
        );
    }
}
export default Acceuil;