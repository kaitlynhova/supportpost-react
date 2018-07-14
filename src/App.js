import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Campaigns from "./Campaigns/Campaigns";
import Cards from "./Cards/Cards";

import "./App.css";

const Navigation = () => (
  <Router>
    <div>
      <ul>
        <li>
          <a href="/">Campaigns</a>
        </li>
        <li>
          <a href="/cards">Cards</a>
        </li>
      </ul>
      <Route exact path="/" component={Campaigns} />
      <Route path="/cards" component={Cards} />
    </div>
  </Router>
);
export default Navigation;
