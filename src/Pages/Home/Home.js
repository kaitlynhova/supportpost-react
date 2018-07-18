import React, { Component } from "react";
import firebase from "firebase";
import { Container } from "../../DesignSystem/Container";

import Campaign from "../../DesignSystem/Campaign";
import "../../Utils/FirebaseConfig";

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
      return <Campaign {...campaign} key={i} />;
    });
    return (
      <div>
        Home page
        <Container>{campaignList}</Container>
      </div>
    );
  }
}

export default Home;
