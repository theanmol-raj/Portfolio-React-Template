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
import { useEffect, useState } from 'react';
import Loader from './Components/Loader';


function App() {
  const auth = firebase.auth();
  const db = firebase.firestore()
  var provider = new firebase.auth.GoogleAuthProvider();
  const [user,SetUser] =useState(()=>auth.currentUser);
  const [init,SetInit] = useState(true);
  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        SetUser(user)
      }else{
        SetUser(null)
      }
      if(init){
        setTimeout(()=>{SetInit(false)},600)
        }
    });
    return unsubscribe;
  },[])

  const signInwithGoogle = async () =>{
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
    var credential = result.credential;
  
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    console.log(error.message)
  });
  
    }
  
    const signout = async () =>{
        try{
          await firebase.auth().signOut()
        }catch(error){
            console.log(error.message)
        }
  
        
  
    }
  
  
  
    
  
    if (init) return <Loader /> ;
  
  
  
  
  
    
  return (
    <div className="App">
    <Router>
    <Hero user={user} />
      <div>
        <Switch>
        <Route path="/Dashboard">
          {user? <LoginDashboard user={user} db={db} /> : 'This is a Broken Link'}
          </Route>
          <Route path="/about">
          <AboutScreen /> 
          </Route>
          <Route path="/Portfolio">
            <Portfolio db={db} />
          </Route>
          <Route path="/">
          <Homescreen db={db} />
          </Route>
        </Switch>
      </div>
    </Router>
    
      
      
      <Footer signin={signInwithGoogle} user={user} signout={signout} />
    </div>
  );
}

export default App;
