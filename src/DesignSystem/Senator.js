import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import { theme } from './theme';

export const SenatorStyle = styled.div``;

const Senator = props => (
  <SenatorStyle>
    <p>{props.senator.name}</p>
  </SenatorStyle>
);

SenatorStyle.propTypes = {};

export default Senator;
