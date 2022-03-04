import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Acceuil from './Acceuil';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categorie from './Categorie';


function App() {
  return (
    <div class="app">
      <Router>
        <Routes> 
          <Route exact path='/' element={<Acceuil />} />
          <Route exact path='/categorie/:id' element={<Categorie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
