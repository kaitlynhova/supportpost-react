import React from 'react';
import styled from 'styled-components';

import { theme } from './theme';
import { Container } from './Container';
import logo from '../Images/logo.svg';
import hovaLabs from '../Images/thehovas.png';

export const HovaBackground = styled.div`
  background-color: ${theme.colors.white};
  padding: ${theme.space.standard * 2}px ${theme.space.standard}px 0 ${theme.space.standard}px;
`;

export const HovaImage = styled.div`
  img {
    display: block;
    margin: 0 auto;
    max-width: ${theme.space.standard * 10}px;
    padding-top: ${theme.space.standard}px;
  }
`;

export const Title = styled.div`
  font-size: ${theme.fontSizes.p}px;
  line-height: ${theme.lineheight.p}px;
  text-align: center;
  a {
    color: ${theme.colors.black};
  }
  img {
    margin-right: ${theme.space.standard / 3}px;
    margin-top: ${theme.space.standard / -3}px;
    max-width: 30px;
  }
  p {
    margin: ${theme.space.none}px;
    padding-top: ${theme.space.standard / 6}px;
  }
  span {
    display: inline;
    font-size: 30px;
  }
`;

const HovaArea = props => (
  <HovaBackground>
    <Container>
      <Title>
        <img alt="Logo" src={logo} />
        <span>Support Post</span>
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
