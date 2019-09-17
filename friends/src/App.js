import React from "react";
import "./App.css";
import { NavLink, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
