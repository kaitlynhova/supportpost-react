import React, { Component } from 'react';

import { Col } from 'react-bootstrap';
import { Button } from '../../DesignSystem/Button';
import Input from '../../DesignSystem/Input';

class CampaignForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      createdAt: '',
      title: '',
      description: '',
      prompt: '',
      note: '',
      color: ''
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.submitCampaign = this.submitCampaign.bind(this);
  }

  handleUserInput(e) {
    const returnObject = this.state;
    returnObject[e.target.name] = e.target.value;
    this.setState(returnObject);
  }

  submitCampaign() {
    this.props.addCampaign({
      id: this.state.id,
      createdAt: Date.now(),
      title: this.state.title,
      description: this.state.description,
      prompt: this.state.prompt,
      note: this.state.note,
      color: this.state.color
    });
    this.setState({
      title: '',
      description: '',
      prompt: '',
      note: '',
      color: ''
    });
  }

  render() {
    return (
      <div className="formWrapper">
        <Col xs={12}>
          <Input
            name="title"
            label="Title:"
            placeholder="..."
            value={this.state.title}
            handleUserInput={this.handleUserInput}
          />
        </Col>

        <Col xs={12}>
          <Input
            name="description"
            label="Description:"
            placeholder="..."
            value={this.state.description}
            handleUserInput={this.handleUserInput}
          />
        </Col>

        <Col xs={12}>
          <Input
            name="prompt"
            label="Prompt:"
            placeholder="..."
            value={this.state.prompt}
            handleUserInput={this.handleUserInput}
          />
        </Col>

        <Col xs={12}>
          <Input
            name="note"
            label="Note:"
            placeholder="..."
            value={this.state.note}
            handleUserInput={this.handleUserInput}
          />
        </Col>

        <Col xs={12} md={6}>
          <Input
            name="color"
            label="Color:"
            placeholder="..."
            value={this.state.color}
            handleUserInput={this.handleUserInput}
          />
        </Col>

        <Col xs={12} md={4}>
          <div onClick={this.submitCampaign} onKeyPress={this.submitCampaign}>
            <Button>Submit</Button>
          </div>
        </Col>
      </div>
    );
  }
}

export default CampaignForm;
