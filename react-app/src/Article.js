import React, { Component } from "react";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Row, Col, Container} from 'react-bootstrap';



class Article extends Component {

  render() {
    return(
      <div className="App">
        <Navigation categories={this.props.categories} sticky="top"/>    
          <Container>
            <Row>
              <Col></Col>
              <Col></Col>
            </Row>  
          </Container>
        <Footer sticky="bottom"/>
      </div>
    );
  }
}
export default Article;