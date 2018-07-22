import styled from 'styled-components';
import { theme } from './theme';

export const TriangleLarge = styled.div`
  width: 0;
  height: 0;
  border-left: 0px solid transparent;
  border-right: 50vw solid transparent;
  transition: 1s;
  border-top: 50vw solid ${props => props.color};
  position: absolute;
  z-index: 0;
`;
