import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Jumbotron/header";
import Footer from "./Components/Footer/footer";
import Login from "./Components/Login/login";
import Signup from "./Components/SignUp/signup";
import withFirebaseAuth from "react-with-firebase-auth";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/Signup">
            <Signup />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default withFirebaseAuth({
  firebaseAppAuth,
})(App);
