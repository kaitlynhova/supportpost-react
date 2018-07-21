import React from 'react';
import styled from 'styled-components';
import { theme } from './theme';
import { Container } from './Container';

import logo from '../Images/logo.svg';
import hovaLabs from '../Images/thehovas.png';

export const Title = styled.div`
  text-align: center;
  font-size: ${theme.fontSizes.p}px;
  line-height: ${theme.lineheight.p}px;
  a {
    color: ${theme.colors.black};
  }
  p {
    padding-top: ${theme.space.standard / 6}px;
    margin: ${theme.space.none}px;
  }
  img {
    max-width: 30px;
    margin-right: 10px;
    margin-top: -10px;
  }
  span {
    font-size: 30px;
    display: inline;
  }
`;

export const HovaBackground = styled.div`
  background-color: ${theme.colors.whitesmoke};
  padding: ${theme.space.standard * 2}px ${theme.space.standard}px 0 ${theme.space.standard}px;
`;

export const HovaImage = styled.div`
  img {
    display: block;
    margin: 0 auto;
    padding-top: ${theme.space.standard}px;
    max-width: 300px;
  }
`;

const HovaArea = props => (
  <HovaBackground>
    <Container>
      <Title>
        <img alt="Logo" src={logo} />
        <span>SupportPost</span>
        <p>is powered by the nice people (and cat) at</p>
        <a href="http://www.hovalabs.com/">
          <strong>Hova Labs</strong>
        </a>
      </Title>
      <HovaImage>
        <img alt="Hova Labs" src={hovaLabs} />
      </HovaImage>
    </Container>
  </HovaBackground>
);

export default HovaArea;
