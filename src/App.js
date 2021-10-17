import React, { Component } from "react";
import reset from "./components/Auth/resetpassword";
import login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import "./App.css";
// import Layout from "./components/Layout/Layout";
import Wizard from "./components/Auth/Wizard/Wizard";
import WhoAreYou from "./components/Auth/WhoAreYou";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dasboard/Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <WhoAreYou />
            </Route>
            <Route path="/" exact component={reset} />
            <Route path="/login" exact component={login} />
            <Route path="/register" exact component={Register} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/wizard" exact component={Wizard} />
            <Route path="/whoareyou" exact component={WhoAreYou} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
