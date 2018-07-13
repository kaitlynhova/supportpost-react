import React, { Component } from "react";
import Card from "./Card/Card";
import CardForm from "./CardForm/CardForm";

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
          name: "Cat Hova",
          email: "Hova@hovalabs.com",
          location: "Omaha, NE"
        }
      ]
    };
    this.addCard = this.addCard.bind(this);
  }
  addCard(card) {
    this.setState({ cards: [...this.state.cards, card] });
  }
  render() {
    var cardList = this.state.cards.map((card, i) => {
      return <Card card={card} key={i} />;
    });
    return (
      <div>
        <h1>SupportCards</h1>
        <CardForm addCard={this.addCard} />
        {cardList}
      </div>
    );
  }
}

export default App;
