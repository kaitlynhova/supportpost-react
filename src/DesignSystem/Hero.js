import React from "react";
import PropTypes from "prop-types";
import { theme } from "./theme";
import styled from "styled-components";
import Container from "../DesignSystem/Container";

import { Grid, Row, Col } from "react-bootstrap";

export const HeroText = styled.div`
  padding-bottom: ${theme.space.standard * 2}px;
  h1 {
    font-size: ${theme.fontSizes.title}px;
  }
  h2 {
    font-size: ${theme.fontSizes.subtitle}px;
    line-height: ${theme.lineheight.h2}px;
  }
`;

const Hero = props => (
  <Container>
    <Grid>
      <Row>
        <Col xs={12}>
          <HeroText>
            <h1>SUPPORT POST</h1>
            <h2>
              Aggregating positive policy rational and connecting you to your
              representatives to make a difference.
            </h2>
          </HeroText>
        </Col>
      </Row>
    </Grid>
  </Container>
);

export default Hero;
