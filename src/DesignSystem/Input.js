import React from 'react';
import styled from 'styled-components';
import { theme } from './theme';

export const InputStyle = styled.div`
  background: ${theme.colors.white};
  display: flex;
  font-family: ${theme.fonts.primary};
  margin-bottom: ${theme.space.standard}px;
  input {
    border: 0;
    width: 100%;
    outline: none;
    padding: ${theme.space.standard / 2}px;
  }
  p {
    font-size: ${theme.fontSizes.p}px;
    padding: ${theme.space.standard / 2}px 0 ${theme.space.standard / 2}px ${theme.space.standard / 2}px;
    margin: 0;
    white-space: nowrap;
  }
`;

const Input = props => (
  <InputStyle>
    <p>{props.placeholder}</p>
    <input name={props.name} placeholder="..." value={props.value} onChange={props.handleUserInput} />
  </InputStyle>
);

export default Input;
