import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import { theme } from './theme';
import states from '../Variables/States';

export const InputStyle = styled.div`
  background: ${theme.colors.white};
  display: flex;
  font-family: ${theme.fonts.primary};
  margin-bottom: ${theme.space.standard}px;
  select {
    background: ${theme.colors.white};
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
const stateOptions = states.map((state, i) => (
  <option value={state} key={i}>
    {state}
  </option>
));

const StateSelect = props => (
  <InputStyle>
    <p>{props.label}</p>
    <select onChange={props.handleUserInput} name={props.name}>
      {stateOptions}
    </select>
  </InputStyle>
);

InputStyle.propTypes = {
  label: PropTypes.string,
  handleUserInput: PropTypes.func,
  name: PropTypes.string
};

export default StateSelect;
