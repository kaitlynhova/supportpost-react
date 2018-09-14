import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';

import { theme } from './theme';
import { Button } from './Button';
import { CardExample } from './CardExample';

const CampaignContainer = styled.div`
  font-family: ${theme.fonts.primary};
  margin-bottom: ${theme.space.standard}px;
  padding-bottom: ${theme.space.standard * 2}px;
`;

const CardContainer = styled.div`
  @media only screen and (max-width: ${theme.breakpoints.medium}px) {
    display: none;
  }
`;

const Description = styled.p`
  font-size: ${theme.fontSizes.p}px;
  line-height: ${theme.lineheight.p}px;
  padding-bottom: ${theme.space.standard / 2}px;
`;

const Title = styled.h1`
  font-size: ${theme.fontSizes.h1}px;
  margin: ${theme.space.none}px;
  padding-bottom: ${theme.space.standard / 2}px;
`;

export const Campaign = props => (
  <CampaignContainer>
    <Grid>
      <Row>
        <Col xs={12} md={8}>
          <Title>{props.title}</Title>
          <Description>{props.description}</Description>
          <a href={`/cards/${props.id}`}>
            <Button>Post Your Support</Button>
          </a>
        </Col>
        <Col xs={12} md={4}>
          <CardContainer>
            <CardExample color={props.color} text={`${props.prompt}...`} />
          </CardContainer>
        </Col>
      </Row>
    </Grid>
  </CampaignContainer>
);

Campaign.propTypes = PropTypes.shape({
  description: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string
});
