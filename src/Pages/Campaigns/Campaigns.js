import React, { Component } from "react";
import firebase from "firebase";

import "../../Utils/FirebaseConfig";

import Campaign from "../../DesignSystem/Campaign";
import CampaignForm from "../../Components/CampaignForm/CampaignForm";

class Campaigns extends Component {
  constructor(props) {
    super(props);

    //initialize the database
    this.db = firebase
      .database()
      .ref()
      .child("campaigns");
    this.state = {
      campaigns: []
    };
    this.addCampaign = this.addCampaign.bind(this);
    this.handleNewCampaign = this.handleNewCampaign.bind(this);
    this.db.on("child_added", this.handleNewCampaign);
  }
  handleNewCampaign(snap) {
    var newCampaign = snap.val();
    newCampaign.id = snap.key;
    this.setState({ campaigns: [...this.state.campaigns, newCampaign] });
  }
  addCampaign(campaign) {
    this.setState({ campaigns: [...this.state.campaigns, campaign] });
    this.db.push(campaign);
  }
  render() {
    const campaignList = this.state.campaigns.map((campaign, i) => {
      return <Campaign {...campaign} key={i} />;
    });
    return (
      <div>
        <h1>SupportCard Campaigns</h1>
        <CampaignForm addCampaign={this.addCampaign} />
        {campaignList}
      </div>
    );
  }
}

export default Campaigns;
