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
   <Router>
    <Routes> 
      <Route exact path='/' element={<Acceuil />} />
    </Routes>
   </Router>
  );
}

export default App;
