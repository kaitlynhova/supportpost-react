import styled from 'styled-components';

import { theme } from './theme';

export const Container = styled.div`
  display: block;
  margin: 0 auto;
  max-width: ${theme.container.max_width}px;
`;
