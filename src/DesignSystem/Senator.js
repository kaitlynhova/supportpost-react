import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import { theme } from './theme';
import SocialLinks from '../Pages/CardDisplayPage/SocialLinks';

export const CongressPerson = styled.p`
  margin: ${theme.space.standard}px 0;
`;

export const SenatorStyle = styled.p`
  color: ${props => theme.partyColors[props.party]};
  font-weight: bold;
  font-size: ${theme.fontSizes.congressperson}px;
  margin-bottom: 0;
`;

export const SenatorInfo = styled.p`
  color: ${theme.partyColors.black};
  font-size: ${theme.fontSizes.p}px;
  margin-bottom: ${theme.space.standard / -6}px;
`;

const Senator = props => (
  <CongressPerson>
    <SenatorStyle party={props.senator.party}>
      {`${props.location} Senator ${props.senator.name} (${props.senator.party})`}
    </SenatorStyle>
    <SenatorInfo>Up for Reelection in {props.senator.next_election}</SenatorInfo>
    <SocialLinks congressperson={props.senator} />
  </CongressPerson>
);

SenatorStyle.propTypes = {
  location: PropTypes.string,
  senator: PropTypes.shape({
    name: PropTypes.string,
    party: PropTypes.string,
    district: PropTypes.string,
    next_election: PropTypes.string
  })
};

export default Senator;
