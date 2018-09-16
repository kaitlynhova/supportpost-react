import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import propublica from '../../Images/Propublica.svg';
import { Container } from '../../DesignSystem/Container';
import { CopyLink } from './CopyLink';
import { House } from './House';
import { Senate } from './Senate';

import FlexContainer from '../../DesignSystem/FlexContainer';

class Congress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      house: [],
      senate: []
    };
    this.getCongress('house');
    this.getCongress('senate');
  }

  getCongress(chamber) {
    axios
      .get(`https://api.propublica.org/congress/v1/members/${chamber}/${this.props.location}/current.json`, {
        method: 'GET',
        mode: 'cors',
        headers: { 'X-API-Key': process.env.REACT_APP_PROPUBLICA_X_API_KEY }
      })
      .then((response) => {
        const newState = this.state;
        newState[chamber] = response.data.results;
        this.setState(newState);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container>
        <h1>Copy the URL to your SupportCard & share it with your {this.props.location} Representatives:</h1>
        <CopyLink supportText={this.props.supportText} />
        <FlexContainer>
          <Senate senators={this.state.senate} location={this.props.location} />
          <House representatives={this.state.house} location={this.props.location} />
        </FlexContainer>
        <Container>
          <p>Representative info powered by:</p>
          <a href="https://projects.propublica.org/api-docs/congress-api/" target="noopener _blank">
            <img alt="ProPublica" src={propublica} width="200px" />
          </a>
        </Container>
      </Container>
    );
  }
}

Congress.propTypes = {
  location: PropTypes.string.isRequired,
  supportText: PropTypes.string.isRequired
};

export { Congress };
