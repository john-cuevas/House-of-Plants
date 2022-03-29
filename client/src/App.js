import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import './App.css';
import Header from "./components/Header";
import Dashboard from "./views/Dashboard";
import Favorites from "./views/Favorites";
import OnePlant from "./views/OnePlant";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path = "/">
            <Dashboard/>
          </Route>
          <Route exact path = "/plants/:id">
            <OnePlant/>
          </Route>
          <Route exact path = "/favorites">
            <Favorites/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
