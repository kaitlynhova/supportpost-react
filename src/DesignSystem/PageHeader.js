import React from 'react';
import styled from 'styled-components';

import { theme } from './theme';

const HeaderText = styled.h1`
  color: ${theme.colors.black};
  padding-bottom: ${theme.space.standard / 2}px;
`;

export const PageHeader = props => <HeaderText>{props.children}</HeaderText>;
