import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import { theme } from './theme';

export const RepresentativeStyle = styled.div``;

const Representative = props => (
  <RepresentativeStyle>
    <p>{props.representative.name}</p>
  </RepresentativeStyle>
);

RepresentativeStyle.propTypes = {};

export default Representative;
