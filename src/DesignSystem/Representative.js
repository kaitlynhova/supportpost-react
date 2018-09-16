import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

export const RepresentativeStyle = styled.div``;

const Representative = props => (
  <RepresentativeStyle>
    <p>{props.representative.name}</p>
  </RepresentativeStyle>
);

RepresentativeStyle.propTypes = {
  name: PropTypes.string
};

export default Representative;
