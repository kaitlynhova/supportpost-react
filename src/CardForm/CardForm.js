import React, { Component } from "react";
import "./CardForm.css";

class CardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      createdAt: "",
      email: "",
      reason: "",
      location: "",
      name: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.submitCard = this.submitCard.bind(this);
  }
  handleUserInput(e) {
    var returnObject = this.state;
    returnObject[e.target.name] = e.target.value;
    this.setState(returnObject);
  }
  submitCard() {
    this.props.addCard({
      campaignId: this.props.campaignId,
      id: this.state.id,
      createdAt: Date.now(),
      email: this.state.email,
      reason: this.state.reason,
      location: this.state.location,
      name: this.state.name
    });
    this.setState({
      email: "",
      reason: "",
      location: "",
      name: ""
    });
  }
  render() {
    return (
      <div className="formWrapper">
        <p>I believe in keeping families together because:</p>
        <input
          name="reason"
          placeholder="super good reason"
          value={this.state.reason}
          onChange={this.handleUserInput}
        />
        <input
          name="name"
          placeholder="my name"
          value={this.state.name}
          onChange={this.handleUserInput}
        />
        <input
          name="email"
          placeholder="my email"
          value={this.state.email}
          onChange={this.handleUserInput}
        />
        <input
          name="location"
          placeholder="my location"
          value={this.state.location}
          onChange={this.handleUserInput}
        />
        <button className="noteButton" onClick={this.submitCard}>
          Submit
        </button>
      </div>
    );
  }
}

export default CardForm;
