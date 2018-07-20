import React from "react";
import PropTypes from "prop-types";
import { theme } from "./theme";
import styled from "styled-components";
import Button from "./Button";
import Card from "./Card";

import { Grid, Row, Col } from "react-bootstrap";

const CampaignContainer = styled.div`
  font-family: ${theme.fonts.primary};
  padding: ${theme.space.standard}px;
  margin-bottom: ${theme.space.standard}px;
`;

const Title = styled.h1`
  font-size: ${theme.fontSizes.h1}px;
  margin: ${theme.space.none}px;
  padding-bottom: ${theme.space.standard / 2}px;
`;

const Description = styled.p`
  font-size: ${theme.fontSizes.p}px;
  padding-bottom: ${theme.space.standard / 2}px;
`;

const CardContainer = styled.div`
  @media only screen and (max-width: ${theme.breakpoints.medium}px) {
    display: none;
  }
`;

export const Campaign = props => (
  <CampaignContainer>
    <Grid>
      <Row>
        <Col xs={12} md={8}>
          <Title>{props.title}</Title>
          <Description>{props.description}</Description>
          <a href={"/cards/" + props.id}>
            <Button>Post Your Support</Button>
          </a>
        </Col>
        <Col xs={12} md={4}>
          <CardContainer>
            <Card color={props.color} text={props.prompt + "..."} />
          </CardContainer>
        </Col>
      </Row>
    </Grid>
  </CampaignContainer>
);

Campaign.propTypes = PropTypes.shape({
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string
});

export default Campaign;
