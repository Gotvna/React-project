import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Acceuil from './Acceuil';
import Category from './Category';




import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div class="app">
      <Router>
        <Routes> 
          <Route exact path='/' element={<Acceuil />} />
          <Route exact path='/category' element={<Category />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
