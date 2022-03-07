import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Acceuil from './Acceuil';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categorie from './Categorie';
import { Component } from 'react';


class App extends Component {

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
    return (
    <div className="app">
      <Router>
        <Routes> 
          <Route exact path='/' element={<Acceuil categories={this.state.categories} />} />
          <Route exact path='/categorie/:id' element={<Categorie categories={this.state.categories} />} />   
        </Routes>
      </Router>
    </div>
    );
  }


  constructor(props){
      super(props)
      this.state={
         categories:[],
      }
    }

    async componentDidMount() {
    //generalement utilisé pour les appels réseaux
    const response = await fetch('http://localhost:1337/api/categories?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const categories = await response.json()
    this.setState({categories:categories})

    }
    render() {
      return (
        <div class="app">
          <Router>
            <Routes> 
              <Route exact path='/' element={<Acceuil categories={this.state.categories} />} />
              <Route exact path='/categorie/:id' element={<Categorie categories={this.state.categories}/> }  />
            </Routes>
          </Router>
        </div>
      );
    }
}


export default App;
