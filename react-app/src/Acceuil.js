import React, { Component } from "react";
import Navigation from './components/Navigation';
import MyCard from './components/MyCard';
import Footer from './components/Footer';
import { Col, Row, Container} from 'react-bootstrap';


class Acceuil extends Component {
    render() {
        return(
            <div className="App">
               <Navigation categories={this.props.categories} />
                <br />
                <Container>
                    <Row>
                        {this.props.categories.data && this.props.categories.data.map((categorie,i)=><Col xd={12} md={{ span: 3 }}>
                            <MyCard categorie={categorie} />
                        </Col>)}
                    </Row>  
                </Container>
                <Footer />
            </div>
        );
    }
}
export default Acceuil;