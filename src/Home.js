import React, { Component } from "react";
import Campaign from "./Campaign/Campaign";
import "./FirebaseConfig/FirebaseConfig";
import firebase from "firebase";

class Home extends Component {
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
    this.handleNewCampaign = this.handleNewCampaign.bind(this);
    this.db.on("child_added", this.handleNewCampaign);
  }
  handleNewCampaign(snap) {
    var newCampaign = snap.val();
    newCampaign.id = snap.key;
    this.setState({ campaigns: [...this.state.campaigns, newCampaign] });
  }
  render(props) {
    var campaignList = this.state.campaigns.map((campaign, i) => {
      return <Campaign campaign={campaign} key={i} />;
    });
    return (
      <div>
        Home page
        {campaignList}
      </div>
    );
  }
}

export default Home;
