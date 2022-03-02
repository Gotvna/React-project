import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Acceuil from './Acceuil';



import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div class="app">
      <Router>
        <Routes> 
          <Route exact path='/' element={<Acceuil />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
