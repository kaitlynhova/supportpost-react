import React, { Component } from 'react';
import firebase from 'firebase';

import { CardShow } from '../../DesignSystem';
import { Body } from '../../DesignSystem/Body';
import { Container } from '../../DesignSystem/Container';
import { LargeCard } from '../../DesignSystem/LargeCard';
import { TriangleLarge } from '../../DesignSystem/TriangleLarge';
import { theme } from '../../DesignSystem/theme';

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
    this.db2 = firebase
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
        <TriangleLarge color={this.state.campaign.color || theme.colors.whitesmoke} />
        <Body>
          <Container>
            <LargeCard>
              <a href={`/cards/${this.state.card.campaignId}`}>← View more cards</a>
              <p>
                <strong>
                  {this.state.campaign.prompt} <a href="#note">*</a>
                </strong>{' '}
                {this.state.card.reason}
                <span>
                  -{this.state.card.name} @ {this.state.card.location}
                </span>
              </p>
              <i id="note">* {this.state.campaign.note}</i>
            </LargeCard>
          </Container>
        </Body>
      </CardShow>
    );
  }
}

export default CardDisplayPage;
