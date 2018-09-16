import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import { theme } from './theme';

export const RepresentativeStyle = styled.p`
  color: ${props => theme.partyColors[props.party]};
  font-weight: bold;
  font-size: ${theme.fontSizes.p}px;
`;

export const RepresentativeInfo = styled.p`
  color: ${theme.partyColors.black};
  font-size: ${theme.fontSizes.subtext}px;
`;

const Representative = props => (
  <div>
    <RepresentativeStyle party={props.representative.party}>
      {`${props.location} District ${props.representative.district} Representative ${props.representative.name} (${
        props.representative.party
      })`}
    </RepresentativeStyle>
    <RepresentativeInfo>Up for Reelection in {props.representative.next_election}</RepresentativeInfo>
  </div>
);

RepresentativeStyle.propTypes = {
  representative: {
    name: PropTypes.string
  }
};

export default Representative;
