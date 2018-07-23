import React from 'react';
import styled from 'styled-components';

import { theme } from './theme';

const HeaderText = styled.h1`
  color: ${theme.colors.white};
  padding-bottom: ${theme.space.standard / 2}px;
`;

export const PageHeader = props => <HeaderText>{props.children}</HeaderText>;
