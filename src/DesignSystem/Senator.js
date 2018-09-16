import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

export const SenatorStyle = styled.div``;

const Senator = props => (
  <SenatorStyle>
    <p>{props.senator.name}</p>
  </SenatorStyle>
);

SenatorStyle.propTypes = {
  name: PropTypes.string
};

export default Senator;
