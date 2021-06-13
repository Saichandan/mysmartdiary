import React from "react";
import "./App.css";
import PageHeader from "./Components/PageHeader/PageHeader";
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Components/Login/login";
import Register from "./Components/Register/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PageHeader />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/main" component={NavBar} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
