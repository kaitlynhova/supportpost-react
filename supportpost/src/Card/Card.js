import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.card = props.card;
  }
  render(props) {
    return (
      <div>
        <p>{this.card.reason}</p>
        <p>
          -{this.card.name} @ {this.card.location}
        </p>
      </div>
    );
  }
}

Card.propTypes = PropTypes.shape({
  id: PropTypes.string,
  createdAt: PropTypes.instanceOf(Date),
  reason: PropTypes.string,
  email: PropTypes.string,
  location: PropTypes.string
});

export default Card;
