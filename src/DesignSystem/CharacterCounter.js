import styled from 'styled-components';
import { theme } from './theme';

export const CharacterCounter = styled.p`
  font-family: ${theme.fonts.primary};
  font-size: ${theme.fontSizes.subtext}px;
  color: ${props => (props.color ? theme.colors.black : theme.colors.white)};
  letter-spacing: ${theme.letterspacing.subtext}px;
  position: relative;
  top: ${theme.space.standard / -1.5}px;
`;
