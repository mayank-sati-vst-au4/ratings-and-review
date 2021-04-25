import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUzgwtNo07mj_u2vWESjjsa44grv8nPyc",
    authDomain: "challenge-9d75f.firebaseapp.com",
    projectId: "challenge-9d75f",
    storageBucket: "challenge-9d75f.appspot.com",
    messagingSenderId: "728114966801",
    appId: "1:728114966801:web:4f6f4ba04050e2a42c1cb0",
    measurementId: "G-L98X4S2BRM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };