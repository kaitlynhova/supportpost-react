import styled from 'styled-components';
import { theme } from './theme';

export const Body = styled.div`
  background: ${theme.colors.whitesmoke};
  font-size: ${theme.fontSizes.p}px;
  padding: ${theme.space.body}px ${theme.space.standard}px ${theme.space.standard}px ${theme.space.standard}px;
  a {
    cursor: pointer;
    font-size: ${theme.fontSizes.p}px;
    line-height: ${theme.space.standard + 1}px;
  }
`;
