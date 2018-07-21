import React, { Component } from 'react';
import firebase from 'firebase';
import { Container } from '../../DesignSystem/Container';
import { Body } from '../../DesignSystem/Body';
import { Campaign } from '../../DesignSystem/Campaign';
import { Hero } from '../../DesignSystem/Hero';
import '../../Utils/FirebaseConfig';
import HovaArea from '../../DesignSystem/HovaArea';

class Home extends Component {
  constructor(props) {
    super(props);
    // initialize the database
    this.db = firebase
      .database()
      .ref()
      .child('campaigns');
    this.state = {
      campaigns: []
    };
    this.handleNewCampaign = this.handleNewCampaign.bind(this);
    this.db.on('child_added', this.handleNewCampaign);
  }

  handleNewCampaign(snap) {
    const newCampaign = snap.val();
    newCampaign.id = snap.key;
    this.setState({ campaigns: [...this.state.campaigns, newCampaign] });
  }

  render(props) {
    const campaignList = this.state.campaigns.map((campaign, i) => <Campaign {...campaign} key={i} />);
    return (
      <span>
        <Body>
          <Hero />
          <Container>{campaignList}</Container>
        </Body>
        <HovaArea />
      </span>
    );
  }
}

export default Home;
