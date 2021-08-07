import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Components/Footer';
import Homescreen from './Screen/Homescreen';
import Hero from './Components/Hero'
import AboutScreen from './Screen/AboutScreen';
import Portfolio from './Screen/Portfolio';
import LoginDashboard from './Screen/LoginDashboard';
import firebase from 'firebase';
import FireDB from './Firebase/Firebase'

function App() {
  const db = firebase.firestore()
  return (
    <div className="App">
    <Router>
    <Hero />
      <div>
        <Switch>
        <Route path="/Login">
          <LoginDashboard db={db} />
          </Route>
          <Route path="/about">
          <AboutScreen /> 
          </Route>
          <Route path="/Portfolio">
            <Portfolio db={db} />
          </Route>
          <Route path="/">
          <Homescreen />
          </Route>
        </Switch>
      </div>
    </Router>
    
      
      
      <Footer />
    </div>
  );
}

export default App;
