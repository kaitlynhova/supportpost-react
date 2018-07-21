import React, { Component } from 'react';

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
        <p>SupportCard Campaigns</p>
        <input name="title" placeholder="title goes here" value={this.state.title} onChange={this.handleUserInput} />
        <input
          name="description"
          placeholder="my description"
          value={this.state.description}
          onChange={this.handleUserInput}
        />
        <input name="prompt" placeholder="my prompt" value={this.state.prompt} onChange={this.handleUserInput} />
        <input name="note" placeholder="my note" value={this.state.note} onChange={this.handleUserInput} />
        <input name="color" placeholder="my color" value={this.state.color} onChange={this.handleUserInput} />
        <button className="campaignButton" type="submit" onClick={this.submitCampaign}>
          Submit
        </button>
      </div>
    );
  }
}

export default CampaignForm;
