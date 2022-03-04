import React, { Component } from "react";
import Navigation from './components/Navigation';
import MyCard from './components/MyCard';
import Footer from './components/Footer';
import { Row, Col, Container} from 'react-bootstrap';
import { useLocation, useParams,useNavigate  } from "react-router-dom";


class CategorieInner extends Component {
    constructor(props){
        super(props)
        this.state={
           articles:[]
        }
      }

    async componentDidMount() {
        //console.log(this.props.useParams());
        const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        const response = await fetch('http://localhost:1337/api/articles?populate=*&filters=categorie.id='+id, {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
        const articles = await response.json()
        this.setState({articles:articles})

    }
    render() {
        return(
            <div className="App">
                <Footer />
            </div>
        );
    }
}

const Categorie = props => {
    return <CategorieInner useNavigate ={useNavigate} useLocation={useLocation} useParams={useParams} {...props} />
}
export default Categorie;