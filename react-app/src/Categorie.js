import React, { Component } from "react";
import Navigation from './components/Navigation';
import MyCard from './components/MyCard';
import Footer from './components/Footer';
import { Row, Col, Container} from 'react-bootstrap';
import { useLocation, useParams,useNavigate  } from "react-router-dom";


class CategorieInner extends Component {

    render() {
        return(
            <div className="App">
                <Footer />
                <Navigation categories={this.props.categories} />
                <br />
                <Container>
                    <Row>
                        {this.state.articles.data && this.state.articles.data.map((article,i)=><Col xd={12} md={{ span: 3 }}>
                            <MyCard article={article} />
                        </Col>)}
                    </Row>  
                </Container>
            </div>
        );
    }
}

const Categorie = props => {
    return <CategorieInner useNavigate ={useNavigate} useLocation={useLocation} useParams={useParams} {...props} />
}
export default Categorie;