
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
let config = {
      apiKey: "AIzaSyClNW90gJjjDBlFoQQlJ_KTwORTOZGRy00",
      authDomain: "studentex-3edcc.firebaseapp.com",
      databaseURL:
        "https://studentex-3edcc-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "studentex-3edcc",
      storageBucket: "studentex-3edcc.appspot.com",
      messagingSenderId: "361062522286",
      appId: "1:361062522286:web:eca8ee919a3050d5df3c3f",
      measurementId: "G-S4C1X96KS8",
    };
    firebase.initializeApp(config);
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
