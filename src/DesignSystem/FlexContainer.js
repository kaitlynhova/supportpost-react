import styled from 'styled-components';
import { theme } from './theme';

export const FlexContainer = styled.div`
  display: flex;
  @media only screen and (max-width: ${theme.breakpoints.medium}px) {
    display: block;
  }
`;

export default FlexContainer;
