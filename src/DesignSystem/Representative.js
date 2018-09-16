import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import SocialLinks from '../Pages/CardDisplayPage/SocialLinks';

import { theme } from './theme';

export const CongressPerson = styled.div`
  margin: ${theme.space.standard}px 0;
`;

export const RepresentativeStyle = styled.p`
  color: ${props => theme.partyColors[props.party]};
  font-weight: bold;
  font-size: ${theme.fontSizes.congressperson}px;
  margin-bottom: 0;
`;

export const RepresentativeInfo = styled.p`
  color: ${theme.partyColors.black};
  font-size: ${theme.fontSizes.p}px;
  margin-bottom: ${theme.space.standard / -6}px;
`;

const Representative = props => (
  <CongressPerson>
    <RepresentativeStyle party={props.representative.party}>
      {`${props.location} District ${props.representative.district} Representative ${props.representative.name} (${
        props.representative.party
      })`}
    </RepresentativeStyle>
    <RepresentativeInfo>Up for Reelection in {props.representative.next_election}</RepresentativeInfo>
    <SocialLinks congressperson={props.representative} />
  </CongressPerson>
);

RepresentativeStyle.propTypes = {
  location: PropTypes.string,
  representative: PropTypes.shape({
    name: PropTypes.string,
    party: PropTypes.string,
    district: PropTypes.string,
    next_election: PropTypes.string
  })
};

export default Representative;
