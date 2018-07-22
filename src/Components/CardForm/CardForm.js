import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Input from '../../DesignSystem/Input';

import { Button } from '../../DesignSystem/Button';
import { PageHeader } from '../../DesignSystem/PageHeader';
import { CharacterCounter } from '../../DesignSystem/CharacterCounter';

class CardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      createdAt: '',
      email: '',
      reason: '',
      location: '',
      name: '',
      reasonCount: 0
    };
    this.handleReasonInput = this.handleReasonInput.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.submitCard = this.submitCard.bind(this);
  }

  handleUserInput(e) {
    const returnObject = this.state;
    returnObject[e.target.name] = e.target.value;
    this.setState(returnObject);
  }

  handleReasonInput(e) {
    if (e.target.value.length < 91) {
      const returnObject = this.state;
      returnObject[e.target.name] = e.target.value;
      returnObject.reasonCount = e.target.value.length;
      this.setState(returnObject);
    }
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
      email: '',
      reason: '',
      location: '',
      name: ''
    });
  }

  render() {
    return (
      <div className="formWrapper">
        <Col xs={12}>
          <PageHeader>{this.props.prompt}...</PageHeader>
        </Col>
        <Col xs={12}>
          <Input
            name="reason"
            label="My Reason:"
            placeholder="..."
            value={this.state.reason}
            handleUserInput={this.handleReasonInput}
          />
          <CharacterCounter>{this.state.reasonCount}/90</CharacterCounter>
        </Col>
        <Col xs={12} md={4}>
          <Input
            name="name"
            label="Name:"
            placeholder="..."
            value={this.state.name}
            handleUserInput={this.handleUserInput}
          />
        </Col>
        <Col xs={12} md={4}>
          <Input
            name="email"
            label="Email:"
            placeholder="..."
            value={this.state.email}
            handleUserInput={this.handleUserInput}
          />
        </Col>
        <Col xs={12} md={4}>
          <Input
            name="location"
            label="Location:"
            placeholder="City, State"
            value={this.state.location}
            handleUserInput={this.handleUserInput}
          />
        </Col>
        <Col xs={12} md={4}>
          <div onClick={this.submitCard} onKeyPress={this.submitCard}>
            <Button color={this.props.color}>Submit</Button>
          </div>
        </Col>
      </div>
    );
  }
}

export default CardForm;
