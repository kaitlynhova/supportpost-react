import React, { Component } from "react";
import PropTypes from "prop-types";

import { Card as CardStyle } from "../../DesignSystem";

class Card extends Component {
  constructor(props) {
    super(props);
    this.card = props.card;
  }
  render(props) {
    return (
      <CardStyle>
        <a href={"/card/" + this.card.id}>
          <p>{this.card.reason}</p>
          <p>
            -{this.card.name} @ {this.card.location}
          </p>
          <p>campaign: {this.card.campaignId}</p>
          <p>card id: {this.card.id}</p>
        </a>
      </CardStyle>
    );
  }
}

Card.propTypes = PropTypes.shape({
  id: PropTypes.string,
  createdAt: PropTypes.instanceOf(Date),
  reason: PropTypes.string,
  email: PropTypes.string,
  location: PropTypes.string,
  campaignId: PropTypes.string
});

export default Card;
