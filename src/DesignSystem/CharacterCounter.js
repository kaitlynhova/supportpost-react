import styled from 'styled-components';

import { theme } from './theme';

export const CharacterCounter = styled.p`
  color: ${props => (props.color ? theme.colors.black : theme.colors.white)};
  font-family: ${theme.fonts.primary};
  font-size: ${theme.fontSizes.subtext}px;
  letter-spacing: ${theme.letterspacing.subtext}px;
  margin-bottom: ${theme.space.standard / -3}px;
  position: relative;
  top: ${theme.space.standard / -1.5}px;
`;
