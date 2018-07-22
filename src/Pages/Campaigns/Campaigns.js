import React, { Component } from 'react';
import firebase from 'firebase';

import { Grid, Row, Col } from 'react-bootstrap';
import { Container } from '../../DesignSystem/Container';

import '../../Utils/FirebaseConfig';
import { Body } from '../../DesignSystem/Body';
import { Campaign } from '../../DesignSystem/Campaign';
import CampaignForm from '../../Components/CampaignForm/CampaignForm';
import { CampaignListPage } from '../../DesignSystem/CampaignListPage';

class Campaigns extends Component {
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
    this.addCampaign = this.addCampaign.bind(this);
    this.handleNewCampaign = this.handleNewCampaign.bind(this);
    this.db.on('child_added', this.handleNewCampaign);
  }

  handleNewCampaign(snap) {
    const newCampaign = snap.val();
    newCampaign.id = snap.key;
    this.setState({ campaigns: [...this.state.campaigns, newCampaign] });
  }

  addCampaign(campaign) {
    this.setState({ campaigns: [...this.state.campaigns, campaign] });
    this.db.push(campaign);
  }

  render() {
    const campaignList = this.state.campaigns.map((campaign, i) => <Campaign {...campaign} key={i} />);
    return (
      <CampaignListPage>
        <Body>
          <Container>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Col xs={12}>
                    <h1>New SupportCard Campaign</h1>
                  </Col>
                  <CampaignForm addCampaign={this.addCampaign} />
                  {campaignList}
                </Col>
              </Row>
            </Grid>
          </Container>
        </Body>
      </CampaignListPage>
    );
  }
}

export default Campaigns;
