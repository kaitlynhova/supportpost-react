import React from 'react';
import firebase from 'firebase';
import { Row, Col } from 'react-bootstrap';

import { Card } from '../../DesignSystem/Card';
import CardForm from '../../Components/CardForm/CardForm';
import '../../Utils/FirebaseConfig';

import { Container } from '../../DesignSystem/Container';
import { CardAgPage } from '../../DesignSystem/CardAgPage';
import { CardList } from '../../DesignSystem/CardList';
import { Link } from '../../DesignSystem/Link';

import { Body } from '../../DesignSystem/Body';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    // initialize the database
    this.db = firebase
      .database()
      .ref()
      .child('cards');
    this.state = {
      cards: [],
      campaign: {}
    };
    this.addCard = this.addCard.bind(this);
    this.handleNewCard = this.handleNewCard.bind(this);
    this.db.on('child_added', this.handleNewCard);
    this.getCampaign = this.getCampaign.bind(this);
  }

  handleNewCard(snap) {
    const newCard = snap.val();
    if (newCard.campaignId === this.props.match.params.campaign_id) {
      newCard.id = snap.key;
      this.setState({ cards: [...this.state.cards, newCard] });
      this.getCampaign();
    }
  }

  getCampaign() {
    const campaignId = this.state.cards[0].campaignId;
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

  addCard(card) {
    if (card.name && card.location && card.name && card.email) {
      this.setState({ cards: [...this.state.cards, card] });
      this.db.push(card);
    } else {
      alert('Fill out the form, plz.');
    }
  }

  render() {
    const cardList = this.state.cards.map((card, i) => (
      <Col xs={12} sm={6} md={4} key={i}>
        <Link href={`/card/${card.id}`}>
          <Card
            text={card.reason}
            name={card.name}
            location={card.location}
            id={card.id}
            color={this.state.campaign.color}
          />
        </Link>
      </Col>
    ));
    return (
      <CardAgPage>
        <Body>
          <Container>
            <Row>
              <CardForm
                addCard={this.addCard}
                campaignId={this.props.match.params.campaign_id}
                color={this.state.campaign.color}
                prompt={this.state.campaign.prompt}
              />
            </Row>
            <Row>
              <CardList>{cardList}</CardList>
            </Row>
          </Container>
        </Body>
      </CardAgPage>
    );
  }
}

export default Cards;
