import React from 'react';
import firebase from 'firebase';
import { Row, Col } from 'react-bootstrap';

import { Card } from '../../DesignSystem/Card';
import CardForm from '../../Components/CardForm/CardForm';
import '../../Utils/FirebaseConfig';

import { Container } from '../../DesignSystem/Container';
import { CardListPage } from '../../DesignSystem/CardListPage';
import { CardList } from '../../DesignSystem/CardList';

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

  componentDidMount() {
    this.getCampaign();
  }

  handleNewCard(snap) {
    const newCard = snap.val();
    if (newCard.campaignId === this.props.match.params.campaign_id) {
      newCard.id = snap.key;
      this.setState({ cards: [...this.state.cards, newCard] });
    }
  }

  getCampaign() {
    const campaignId = window.location.pathname.split('cards/')[1];
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
      alert('All fields are required');
    }
  }

  render() {
    const pageContent = this.state.campaign.id !== undefined ? (
      <CardListPage>
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
              <CardList>
                {this.state.cards.map((card, i) => (
                  <Card
                    card={card}
                    text={card.reason}
                    name={card.name}
                    location={card.location}
                    id={card.id}
                    color={this.state.campaign.color}
                    key={i}
                  />
                ))}
              </CardList>
            </Row>
          </Container>
        </Body>
      </CardListPage>
    ) : (
      ''
    );
    return <span> {pageContent} </span>;
  }
}

export default Cards;
