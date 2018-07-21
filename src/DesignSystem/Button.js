import styled from 'styled-components';
import { theme } from './theme';

export const Button = styled.button`
  border: none;
  font-family: ${theme.fonts.primary};
  font-size: ${theme.fontSizes.p}px;
  color: ${props => (props.color ? theme.colors.black : theme.colors.white)};
  background-color: ${props => (props.color ? props.color : theme.colors.black)};
  padding: ${theme.space.standard / 2}px ${theme.space.standard}px;
`;
