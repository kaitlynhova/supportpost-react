import React, { Component } from "react";
import Card from "../../DesignSystem/Card";
import CardForm from "../../Components/CardForm/CardForm";
import "../../Utils/FirebaseConfig";
import firebase from "firebase";

import { Grid, Row, Col } from "react-bootstrap";
import Container from "../../DesignSystem/Container";

import Body from "../../DesignSystem/Body";

class Cards extends Component {
  constructor(props) {
    super(props);
    //initialize the database
    this.db = firebase
      .database()
      .ref()
      .child("cards");

    this.state = {
      cards: []
    };
    this.addCard = this.addCard.bind(this);
    this.handleNewCard = this.handleNewCard.bind(this);
    this.db.on("child_added", this.handleNewCard);
  }
  handleNewCard(snap) {
    var newCard = snap.val();
    if (newCard.campaignId == this.props.match.params.campaign_id) {
      newCard.id = snap.key;
      this.setState({ cards: [...this.state.cards, newCard] });
    }
  }
  addCard(card) {
    this.setState({ cards: [...this.state.cards, card] });
    this.db.push(card);
  }
  render() {
    var cardList = this.state.cards.map((card, i) => {
      return <Card {...card} key={i} />;
    });
    return (
      <Body>
        <Container>
          <h1>SupportCards</h1>
          <CardForm
            addCard={this.addCard}
            campaignId={this.props.match.params.campaign_id}
          />
          {cardList}
        </Container>
      </Body>
    );
  }
}

export default Cards;
