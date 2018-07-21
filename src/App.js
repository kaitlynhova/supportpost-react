import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './DesignSystem/Nav';

import CardDisplayPage from './Pages/CardDisplayPage/CardDisplayPage';
import Campaigns from './Pages/Campaigns/Campaigns';
import Cards from './Pages/Cards/Cards';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

const Navigation = () => (
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/cards/:campaign_id" render={props => <Cards {...props} />} />
      <Route exact path="/card/:card_id" render={props => <CardDisplayPage {...props} />} />
      <Route path="/campaigns" component={Campaigns} />
    </div>
  </Router>
);
export default Navigation;
