import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';

import { theme } from './theme';
import { Container } from './Container';

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

export const Hero = props => (
  <Container>
    <Grid>
      <Row>
        <Col xs={12}>
          <HeroText>
            <h1>SUPPORT POST</h1>
            <h2>
              Aggregating positive policy rational and connecting you to your representatives to make a difference.
            </h2>
          </HeroText>
        </Col>
      </Row>
    </Grid>
  </Container>
);
