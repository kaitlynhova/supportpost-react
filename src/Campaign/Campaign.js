import React, { Component } from "react";
import PropTypes from "prop-types";

class Campaign extends Component {
  constructor(props) {
    super(props);
    this.campaign = props.campaign;
  }
  render(props) {
    return (
      <div>
        <p>campaign</p>
        <p>title: {this.props.campaign.title}</p>
        <p>description: {this.props.campaign.description}</p>
        <p>prompt: {this.props.campaign.prompt}</p>
        <p>note: #{this.props.campaign.note}</p>
        <p>color: #{this.props.campaign.color}</p>
      </div>
    );
  }
}

export default Campaign;
