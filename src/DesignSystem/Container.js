import { theme } from "./theme";
import styled from "styled-components";

export const Container = styled.div`
  max-width: ${theme.container.max_width}px;
  display: block;
  margin: 0 auto;
`;

export default Container;
