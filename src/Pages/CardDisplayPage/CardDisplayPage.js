import React, { Component } from 'react';
import firebase from 'firebase';

import { CardShow } from '../../DesignSystem';

import '../../Utils/FirebaseConfig';

class CardDisplayPage extends Component {
  constructor(props) {
    super(props);
    this.db = firebase
      .database()
      .ref()
      .child('cards')
      .orderByKey()
      .equalTo(this.props.match.params.card_id);

    this.state = {
      campaign: {},
      card: {}
    };
    this.handleCard = this.handleCard.bind(this);
    this.getCampaign = this.getCampaign.bind(this);
    this.db.on('child_added', this.handleCard);
  }

  handleCard(snap) {
    const card = snap.val();
    card.id = snap.key;
    console.log(card.reason);
    this.setState({ card });
    this.getCampaign();
  }

  getCampaign() {
    const campaignId = this.state.card.campaignId;
    this.db = firebase
      .database()
      .ref()
      .child('campaigns')
      .orderByKey()
      .equalTo(campaignId)
      .on('value', (snapshot) => {
        this.setState({ campaign: snapshot.val()[campaignId] });
      });
  }

  render() {
    return (
      <CardShow>
        <h1>SupportCard</h1>
        <p>{this.state.card.reason}</p>
        <p>
          -{this.state.card.name} @ {this.state.card.location}
        </p>
        <p>campaign: {this.state.campaign.prompt}</p>
      </CardShow>
    );
  }
}

export default CardDisplayPage;
