import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyC4X4QUPTVCFiH8eSqKxFTosKhK2wADbyw",
  authDomain: "react-playground-7ff82.firebaseapp.com",
  databaseURL: "https://react-playground-7ff82.firebaseio.com",
  projectId: "react-playground-7ff82",
  storageBucket: "",
  messagingSenderId: "3022927356"
};

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };