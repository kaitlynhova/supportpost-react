import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme } from './theme';

const SupportCard = styled.div`
  align-items: center;
  background: ${theme.colors.white};
  box-sizing: border-box;
  color: ${theme.colors.black};
  display: flex;
  flex: 0 0 100%;
  flex-basis: auto;
  width: 100%;
  &:before {
    content: '';
    float: left;
    padding-top: 100%;
  }
  &:hover {
    color: ${theme.colors.black};
    text-decoration: none;
  }
`;

const Triangle = styled.div`
  align-self: self-start;
  border-left: 0px solid ${theme.colors.transparent};
  border-right: ${theme.cardtriangle.desktop}vw solid ${theme.colors.transparent};
  border-top: ${theme.cardtriangle.desktop}vw solid ${props => props.color};
  height: 0;
  position: absolute;
  width: 0;
  z-index: 1;
  @media only screen and (max-width: ${theme.breakpoints.medium}px) {
    border-right: ${theme.cardtriangle.tablet}vw solid ${theme.colors.transparent};
    border-top: ${theme.cardtriangle.tablet}vw solid ${props => props.color};
  }
  @media only screen and (max-width: ${theme.breakpoints.small}px) {
    border-right: ${theme.cardtriangle.mobile}vw solid ${theme.colors.transparent};
    border-top: ${theme.cardtriangle.mobile}vw solid ${props => props.color};
  }
`;

const CardContent = styled.div`
  padding: ${theme.space.standard}px;
  position: relative;
  text-align: left;
  z-index: 2;
`;

const CardDescription = styled.div`
  font-size: ${theme.fontSizes.card}px;
`;

const CardName = styled.div`
  font-size: ${theme.fontSizes.cardname}px;
`;

const generateCardAuthor = (name, location) => (name ? `- ${name}, ${location}` : '');

export const CardExample = props => (
  <SupportCard>
    <Triangle color={props.color} />
    <CardContent>
      <CardDescription>{props.text}</CardDescription>
      <CardName>{props.name && <p> {generateCardAuthor(props.name, props.location)}</p>}</CardName>
    </CardContent>
  </SupportCard>
);

CardExample.defaultProps = {
  name: '',
  location: ''
};

CardExample.propTypes = {
  color: PropTypes.string.isRequired,
  location: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string.isRequired
};
