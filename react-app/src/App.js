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
import Cart from './Cart';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      categories:[],
      cart:[]
    }
  }

  async componentDidMount() {
  //generalement utilisé pour les appels réseaux
  const response = await fetch('http://localhost:1337/api/categories?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
  const categories = await response.json()
  console.log(categories)
  this.setState({categories:categories})


  }

  addToCart = (article) => {
    let cart = this.state.cart;

    for (let i; i < cart.length; i++){
      if(cart[i].article.id === article.id) {
        cart[i].count++;
        return;
      }
        
    }

    cart.push({"article": article, "count": 1});
    console.log(cart);
  }

  render() {
    return (
    <div className="app">
      <Router>
        <Routes> 
          <Route exact path='/' element={<Acceuil categories={this.state.categories} />} />
          <Route exact path='/categorie/:id' element={<Categorie categories={this.state.categories} cart={this.state.cart} addToCart={(a) => this.addToCart(a)} />} />
          <Route exact path='/Cart' element={<Cart articles={this.state.articles} />} />
        </Routes>
      </Router>
    </div>
    );
  }
}


export default App;
