import styled from 'styled-components';
import { theme } from './theme';

export const LargeCard = styled.div`
  p {
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSizes.largecard}px;
    position: relative;
    a {
      font-size: ${theme.fontSizes.largecard}px;
    }
  }
  a {
    color: ${theme.colors.black};
    font-size: ${theme.fontSizes.largecard / 2}px;
    position: relative;
    text-decoration: none;
  }
  i {
    font-size: ${theme.fontSizes.p}px;
    position: relative;
  }
  span {
    display: block;
    font-size: ${theme.fontSizes.largecard / 2}px;
  }
`;
