import firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
  apiKey: "AIzaSyA_QM1v2O8DI3P1YlkuEFoHaMSZJzoANgQ",
  authDomain: "easy-buy-a6371.firebaseapp.com",
  databaseURL: "https://easy-buy-a6371.firebaseio.com",
  projectId: "easy-buy-a6371",
  storageBucket: "easy-buy-a6371.appspot.com",
  messagingSenderId: "62789087626",
  appId: "1:62789087626:web:7d9121c039e4a991df5873",
  measurementId: "G-X69Y8T6RT4",
});

export const auth = app.auth();
export default app;
