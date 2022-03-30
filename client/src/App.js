import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import './App.css';
import Header from "./components/Header";
import Cacti from "./views/Cacti";
import Dashboard from "./views/Dashboard";
import Easy from "./views/Easy";
import Favorites from "./views/Favorites";
import FloweringPlants from "./views/FloweringPlants";
import OnePlant from "./views/OnePlant";
import RarePlants from "./views/RarePlants";
import Succulents from "./views/Succulents";
import Register from './views/Register';
import Login from './views/Login';
import Cookie from './views/Cookie';

function App() {
  return (
    <div className="MainContainer">
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
          <Route exact path = "/succulents">
            <Succulents/>
          </Route>
          <Route exact path = "/cacti">
            <Cacti/>
          </Route>
          <Route exact path = "/flowering_plants">
            <FloweringPlants/>
          </Route>
          <Route exact path = "/rare_plants">
            <RarePlants/>
          </Route>
          <Route exact path = "/easy_to_care_for">
            <Easy/>
          </Route>
          <Route path = "/register">
            <Register />
          </Route>
          <Route path = "/login">
            <Login />
          </Route>
          <Route path = "/cookie">
            <Cookie />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
