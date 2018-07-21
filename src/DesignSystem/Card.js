import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from './theme';

const CardContainer = styled.div`
  background-color: ${theme.colors.whitesmoke};
  padding-bottom: 100%;
  position: relative;
  margin-top: -17vw;
`;

const CardContent = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-size: ${theme.fontSizes.card}vw;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* Vertical Centering */
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: ${theme.space.standard}px;
  z-index: 1;
  p {
    font-size: ${theme.fontSizes.cardname}px;
    padding-top: ${theme.space.standard / 3}px;
  }
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 0px solid transparent;
  border-right: 17vw solid transparent;
  border-top: 17vw solid ${props => props.color};
  position: relative;
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
  text: PropTypes.string.isRequired,
  name: PropTypes.string,
  location: PropTypes.string,
  color: PropTypes.string.isRequired
};
