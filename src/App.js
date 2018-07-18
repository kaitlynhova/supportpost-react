import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";

import CardDisplayPage from "./Pages/CardDisplayPage/CardDisplayPage";
import Campaigns from "./Pages/Campaigns/Campaigns";
import Cards from "./Pages/Cards/Cards";
import Home from "./Pages/Home/Home";
import GridTest from "./Pages/GridTest/GridTest";

const Navigation = () => (
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/grid" component={GridTest} />
      <Route
        exact
        path="/cards/:campaign_id"
        render={props => <Cards {...props} />}
      />
      <Route
        exact
        path="/card/:card_id"
        render={props => <CardDisplayPage {...props} />}
      />
      <Route path="/campaigns" component={Campaigns} />
    </div>
  </Router>
);
export default Navigation;
