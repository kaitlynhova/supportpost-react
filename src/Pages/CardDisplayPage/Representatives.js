import React, { Component } from 'react';
import PropTypes from 'prop-types';
import propublica from '../../Images/Propublica.svg';
import { Container } from '../../DesignSystem/Container';

class Representatives extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location
    };
  }

  render() {
    return (
      <Container>
        <h1>Share your views with your {this.props.location} Representatives:</h1>
        <p>Representative info powered by:</p>
        <img alt="ProPublica" src={propublica} />
      </Container>
    );
  }
}

Representatives.propTypes = {
  location: PropTypes.string.isRequired
};
export { Representatives };
