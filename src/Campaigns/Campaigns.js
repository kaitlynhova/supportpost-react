import React, { Component } from "react";
import Campaign from "../Campaign/Campaign";
import CampaignForm from "../CampaignForm/CampaignForm";
import "../FirebaseConfig/FirebaseConfig";
import firebase from "firebase";

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
    debugger;
    this.setState({ campaigns: [...this.state.campaigns, snap.val()] });
  }
  addCampaign(campaign) {
    this.setState({ campaigns: [...this.state.campaigns, campaign] });
    this.db.push(campaign);
  }
  render() {
    var campaignList = this.state.campaigns.map((campaign, i) => {
      return <Campaign campaign={campaign} key={i} />;
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
