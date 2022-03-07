import React, { Component } from "react";
import Navigation from './components/Navigation';
import MyCard from './components/MyCard';
import Footer from './components/Footer';
import { Row, Col, Container} from 'react-bootstrap';
import background from './img/background.jpg';


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
        return(
            <div className="App" style={{backgroundImage: `url(${background})`}}>
               <Navigation categories={this.state.categories} sticky="top"/>
                
                <Container>
                    <Row className="align-items-center vh-100">
                        {this.state.categories.data && this.state.categories.data.map((categorie,i)=><Col xd={12} md={{ span: 3 }}>
                            <MyCard categorie={categorie} />
                        </Col>)}
                    </Row>  
                </Container>
                <Footer sticky="bottom"/>
            </div>
        );
    }
}
export default Acceuil;