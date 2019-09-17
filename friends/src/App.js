import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./components/Login";
import Friends from "./components/Friends";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/friends" component={Friends} />
      </Switch>
    </div>
  );
}

export default App;
