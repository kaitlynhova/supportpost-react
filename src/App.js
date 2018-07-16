import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CardDisplayPage from "./CardDisplayPage/CardDisplayPage";
import Campaigns from "./Campaigns/Campaigns";
import Cards from "./Cards/Cards";
import Home from "./Home";

import "./App.css";

const Navigation = () => (
  <Router>
    <div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/cards">Cards</a>
        </li>
        <li>
          <a href="/campaigns">Campaigns</a>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
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
