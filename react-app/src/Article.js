import React, { Component } from "react";
import Navigation from './Component/Navigation';
import MyCard from './Component/MyCard';
import Footer from './Component/Footer';
import { Row, Col, Container} from 'react-bootstrap';


class Article extends Component {
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
export default Article;