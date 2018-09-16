import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import { theme } from './theme';

export const SenatorStyle = styled.p`
  color: ${props => theme.partyColors[props.party]};
  font-weight: bold;
  font-size: ${theme.fontSizes.p}px;
`;

export const SenatorInfo = styled.p`
  color: ${theme.partyColors.black};
  font-size: ${theme.fontSizes.subtext}px;
`;

const Senator = props => (
  <div>
    <SenatorStyle party={props.senator.party}>
      {`${props.location} Senator ${props.senator.name} (${props.senator.party})`}
    </SenatorStyle>
    <SenatorInfo>Up for Reelection in {props.senator.next_election}</SenatorInfo>
  </div>
);

SenatorStyle.propTypes = {
  senator: {
    name: PropTypes.string
  }
};

export default Senator;
