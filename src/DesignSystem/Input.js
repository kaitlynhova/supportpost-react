import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import { theme } from './theme';

export const InputStyle = styled.div`
  background: ${theme.colors.white};
  display: flex;
  font-family: ${theme.fonts.primary};
  margin-bottom: ${theme.space.standard}px;
  input {
    border: 0;
    font-size: ${theme.fontSizes.p}px;
    outline: none;
    padding: ${theme.space.standard / 2}px;
    width: 100%;
  }
  p {
    font-size: ${theme.fontSizes.p}px;
    margin: 0;
    padding: ${theme.space.standard / 2}px 0 ${theme.space.standard / 2}px ${theme.space.standard / 2}px;
    white-space: nowrap;
  }
`;

const Input = props => (
  <InputStyle>
    <p>{props.label}</p>
    <input
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      maxLength={props.name === 'reason' ? '' : '35'}
      onChange={props.handleUserInput}
    />
  </InputStyle>
);

InputStyle.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleUserInput: PropTypes.func
};

export default Input;
