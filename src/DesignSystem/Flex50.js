import styled from 'styled-components';
import { theme } from './theme';

export const Flex50 = styled.div`
  flex: 0 0 50%;
  width: 50%;
  @media only screen and (max-width: ${theme.breakpoints.medium}px) {
    flex: 0 0 100%;
    width: 100%;
  }
`;

export default Flex50;
