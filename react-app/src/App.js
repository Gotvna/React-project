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

  if (localStorage.getItem("cart"))
    this.setState({ cart: JSON.parse(localStorage.getItem("cart"))});
    window.onbeforeunload = () => {
      localStorage.setItem("cart", JSON.stringify(this.state.cart));
    };
  }



  addToCart = (article) => {
    let cart = this.state.cart;
    let found = false
    for (let i=0; i < cart.length; i++){
      if(cart[i].article.id === article.id) {
        cart[i].count++;
        found=true
        this.setState({cart:cart})
        return;
      }
    }
    if(!found){
      cart.push({"article": article, "count": 1});
      this.setState({cart:cart})
    }
  }

  removeFromCart = (hab) => {
    let newCart = this.state.cart;
    newCart.splice(hab, 1);
    this.setState({cart: newCart});

  }


  render() {
    return (
    <div className="app">
      <Router>
        <Routes> 
          <Route exact path='/' element={<Acceuil categories={this.state.categories} cart={this.state.cart}/>} />
          <Route exact path='/categorie/:id' element={<Categorie categories={this.state.categories} cart={this.state.cart} addToCart={(a) => this.addToCart(a)} />} />
          <Route exact path='/Cart' element={<Cart  categories={this.state.categories} cart={this.state.cart} addToCart={(a) => this.addToCart(a)} removeFromCart={(a) => this.removeFromCart(a)} />} />
        </Routes>
      </Router>
    </div>
    );
  }
}


export default App;
