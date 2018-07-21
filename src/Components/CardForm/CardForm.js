import React, { Component } from "react";
import Input from "../../DesignSystem/Input";
import { Grid, Row, Col } from "react-bootstrap";

import Button from "../../DesignSystem/Button";

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
    const returnObject = this.state;
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
        <Col xs={12}>
          <h1>{this.props.prompt}</h1>
        </Col>
        <Col xs={12}>
          <Input
            name="reason"
            placeholder="My Reason:"
            value={this.state.reason}
            handleUserInput={this.handleUserInput}
          />
        </Col>
        <Col xs={12} md={4}>
          <Input
            name="name"
            placeholder="Name:"
            value={this.state.name}
            handleUserInput={this.handleUserInput}
          />
        </Col>
        <Col xs={12} md={4}>
          <Input
            name="email"
            placeholder="Email:"
            value={this.state.email}
            handleUserInput={this.handleUserInput}
          />
        </Col>
        <Col xs={12} md={4}>
          <Input
            name="location"
            placeholder="Location:"
            value={this.state.location}
            handleUserInput={this.handleUserInput}
          />
        </Col>
        <Col xs={12} md={4}>
          <div className="noteButton" onClick={this.submitCard}>
            <Button color={this.props.color}> Submit </Button>
          </div>
        </Col>
      </div>
    );
  }
}

export default CardForm;
