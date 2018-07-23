import styled from 'styled-components';
import { theme } from './theme';

export const Button = styled.button`
  background-color: ${props => (props.color ? props.color : theme.colors.black)};
  border: none;
  color: ${props => (props.color ? theme.colors.black : theme.colors.white)};
  font-family: ${theme.fonts.primary};
  font-size: ${theme.fontSizes.p}px;
  outline: none;
  padding: ${theme.space.standard / 2}px ${theme.space.standard}px;
`;
