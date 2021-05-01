import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';


firebase.initializeApp( {
  apiKey: "AIzaSyDFxnvyNW2_uqWP2xn95u-Uq8nMUI4NbGk",
  authDomain: "evernote-clone-2ed85.firebaseapp.com",
  projectId: "evernote-clone-2ed85",
  storageBucket: "evernote-clone-2ed85.appspot.com",
  messagingSenderId: "185631867478",
  appId: "1:185631867478:web:2d25f222a71934c02631f7"
});

ReactDOM.render(
    <App />,
  document.getElementById('evernote-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
