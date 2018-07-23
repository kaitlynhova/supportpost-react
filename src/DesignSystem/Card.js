import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme } from './theme';

const CardContainer = styled.div`
  background-color: ${theme.colors.whitesmoke};
  margin-bottom: ${theme.space.standard}px;
  margin-top: -17vw;
  padding-bottom: 100%;
  position: relative;
`;

const CardContent = styled.div`
  align-items: center;
  bottom: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-size: ${theme.fontSizes.card}vw;
  left: 0;
  padding: ${theme.space.standard}px;
  position: absolute;
  right: 0;
  top: 0;
  /* Vertical Centering */
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  z-index: 1;
  p {
    font-size: ${theme.fontSizes.cardname}px;
    padding-top: ${theme.space.standard / 3}px;
  }
`;

const Triangle = styled.div`
  border-left: 0px solid transparent;
  border-right: 17vw solid transparent;
  border-top: 17vw solid ${props => props.color};
  height: 0;
  position: relative;
  width: 0;
  z-index: 1;
`;

const generateCardAuthor = (name, location) => (name ? `- ${name}, ${location}` : '');

export const Card = props => (
  <span>
    <Triangle color={props.color} />
    <CardContainer>
      <CardContent>
        <span>
          {props.text}
          {props.name && <p> {generateCardAuthor(props.name, props.location)}</p>}
        </span>
      </CardContent>
    </CardContainer>
  </span>
);

Card.defaultProps = {
  name: '',
  location: ''
};

Card.propTypes = {
  color: PropTypes.string.isRequired,
  location: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string.isRequired
};
