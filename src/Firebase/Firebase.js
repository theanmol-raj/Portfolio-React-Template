import firebase from "firebase";
var firebaseConfig = {
    apiKey: "Use config HEre",
    authDomain: "my-portfolio-ceb8e.firebaseapp.com",
    projectId: "my-portfolio-ceb8e",
    storageBucket: "my-portfolio-ceb8e.appspot.com",
    messagingSenderId: "148124880421",
    appId: "1:148124880421:web:a84871a963cde7238bb9cc"
  };
var FireDB =firebase.initializeApp(firebaseConfig)
export default  FireDB
