import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ReCAPTCHA from 'react-google-recaptcha';
import Input from '../../DesignSystem/Input';
import StateSelect from '../../DesignSystem/StateSelect';

import { Button } from '../../DesignSystem/Button';
import { PageHeader } from '../../DesignSystem/PageHeader';
import { CharacterCounter } from '../../DesignSystem/CharacterCounter';
import { RecaptchaArea } from '../../DesignSystem/RecaptchaArea';

class CardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      createdAt: '',
      email: '',
      reason: '',
      approved: false,
      location: '',
      name: '',
      reasonCount: 0,
      recaptcha: ''
    };
    this.updateRecaptcha = this.updateRecaptcha.bind(this);
    this.handleReasonInput = this.handleReasonInput.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.submitCard = this.submitCard.bind(this);
  }

  updateRecaptcha(value) {
    this.setState({ recaptcha: value });
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
    if (this.state.recaptcha) {
      this.props.addCard({
        approved: this.state.approved,
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
    } else {
      alert('Nope, you have to do the reCAPTCHA thing');
    }
  }

  render() {
    return (
      <div className="formWrapper">
        <Col xs={12}>
          <PageHeader>
            {this.props.prompt}
            ...
          </PageHeader>
        </Col>
        <Col xs={12}>
          <Input
            name="reason"
            label="My Reason:"
            placeholder="Because I believe..."
            value={this.state.reason}
            handleUserInput={this.handleReasonInput}
            maxLength={90}
          />
          <CharacterCounter>
            {this.state.reasonCount}
            /90
          </CharacterCounter>
        </Col>
        <Col xs={12} md={4}>
          <Input
            name="name"
            label="Name:"
            placeholder="Hova Hovancen"
            value={this.state.name}
            handleUserInput={this.handleUserInput}
            maxLength={35}
          />
        </Col>
        <Col xs={12} md={4}>
          <Input
            name="email"
            label="Email:"
            placeholder="Email@email.com"
            value={this.state.email}
            handleUserInput={this.handleUserInput}
            maxLength={35}
          />
        </Col>
        <Col xs={12} md={4}>
          <StateSelect
            name="location"
            label="State:"
            value={this.state.location}
            handleUserInput={this.handleUserInput}
          />
        </Col>
        <Col xs={12} md={4}>
          <RecaptchaArea>
            <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_KEY} onChange={this.updateRecaptcha} />
          </RecaptchaArea>
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
