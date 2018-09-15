import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import propublica from '../../Images/Propublica.svg';
import { Container } from '../../DesignSystem/Container';
import { House } from './House';
import { Senate } from './Senate';

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
        <h1>Share your views with your {this.props.location} Representatives:</h1>
        <p>Representative info powered by:</p>
        <a href="https://www.propublica.org/datastore/" target="noopener _blank">
          <img alt="ProPublica" src={propublica} width="200px" />
        </a>
        <House representatives={this.state.house} />
        <Senate senators={this.state.senate} />
      </Container>
    );
  }
}

Congress.propTypes = {
  location: PropTypes.string.isRequired
};
export { Congress };
