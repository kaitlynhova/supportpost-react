import React from "react";
import { theme } from "./theme";
import styled from "styled-components";
import Container from "../DesignSystem/Container";

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
  padding: ${theme.space.standard * 2}px ${theme.space.standard}px 0
    ${theme.space.standard}px;
`;

export const HovaImage = styled.div`
  img {
    display: block;
    margin: 0 auto;
    max-width: 300px;
  }
`;

const HovaArea = props => (
  <HovaBackground>
    <Container>
      <Title>
        <img src={require("../Images/logo.svg")} />
        <span>SupportPost</span>
        <p>is powered by the nice people (and cat) at</p>
        <a href="http://www.hovalabs.com/">
          <strong>Hova Labs</strong>
        </a>
      </Title>
      <HovaImage>
        <img src={require("../Images/thehovas.png")} />
      </HovaImage>
    </Container>
  </HovaBackground>
);

export default HovaArea;
