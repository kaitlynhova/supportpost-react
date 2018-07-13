import React, { Component } from "react";
import Card from "./Card/Card";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          id: "aaaah",
          createdAt: Date.now(),
          reason: "Because it's the right thing to do",
          email: "Hova@hovalabs.com",
          location: "Omaha, NE"
        }
      ]
    };
  }
  render() {
    var cardList = this.state.cards.map((card, i) => {
      return <Card card={card} key={i} />;
    });
    return (
      <div>
        <h1>SupportCards</h1>
        {cardList}
      </div>
    );
  }
}

export default App;
