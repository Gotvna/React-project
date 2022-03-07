import React, { Component } from "react";
import Navigation from './components/Navigation';
import MyCard from './components/MyCard';
import Footer from './components/Footer';
<<<<<<< HEAD
import { Row, Col, Container} from 'react-bootstrap';
import background from './img/background.jpg';
import App from './App';


class Acceuil extends Component {

    render() {
        return(
            <div className="App" style={{backgroundImage: `url(${background})`}}>
               <Navigation categories={this.props.categories} sticky="top"/>
                
                <Container>
                    <Row className="align-items-center vh-100">
=======
import { Col, Row, Container} from 'react-bootstrap';


class Acceuil extends Component {
    render() {
        return(
            <div className="App">
               <Navigation categories={this.props.categories} />
                <br />
                <Container>
                    <Row>
>>>>>>> 84234942fd5088c109d336c4bfc773166a3f6905
                        {this.props.categories.data && this.props.categories.data.map((categorie,i)=><Col xd={12} md={{ span: 3 }}>
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