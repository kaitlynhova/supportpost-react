import styled from 'styled-components';

export const TriangleLarge = styled.div`
  border-left: 0px solid transparent;
  border-right: 50vw solid transparent;
  border-top: 50vw solid ${props => props.color};
  height: 0;
  position: absolute;
  transition: 1s;
  width: 0;
  z-index: 0;
`;
