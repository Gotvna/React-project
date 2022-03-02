import React, { Component } from "react";
import Navigation from './components/Navigation';
import MyCard from './components/MyCard';
import Footer from './components/Footer';
import { Row, Col, Container} from 'react-bootstrap';


class Acceuil extends Component {
    render() {
        return(
            <div>
                <Navigation sticky="top" />
                <br />
                <Container>
                    <Row>
                        <Col sm={3}><MyCard /></Col>
                        <Col sm={3}><MyCard /></Col>
                        <Col sm={3}><MyCard /></Col>
                        <Col sm={3}><MyCard /></Col>
                        <Col sm={3}><MyCard /></Col>
                        <Col sm={3}><MyCard /></Col>
                        <Col sm={3}><MyCard /></Col>
                        <Col sm={3}><MyCard /></Col>
                    </Row>  
                </Container>
                <Footer />
            </div>
        );
    }
}
export default Acceuil;