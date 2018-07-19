import React from "react";
import PropTypes from "prop-types";
import { theme } from "./theme";
import styled from "styled-components";
import Button from "./Button";

import { Grid, Row, Col } from "react-bootstrap";

const Card = styled.div`
  background-color: ${theme.colors.whitesmoke};
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-top: -17vw;
  :before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  div {
    display: table;
    width: 100%;
    height: 100%;
  }
  span {
    display: table-cell;
    text-align: left;
    vertical-align: middle;
    padding: ${theme.space.standard}px;
    font-size: ${theme.fontSizes.card}vw;
    color: ${theme.colors.black};
    position: relative;
    z-index: 1;
  }
`;

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

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 0px solid transparent;
  border-right: 17vw solid transparent;
  border-top: 17vw solid ${props => props.color};
  position: relative;
  z-index: 1;
`;

debugger;

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
          <Triangle color={props.color} />
          <Card>
            <CardContent>
              <div>
                <span>{props.prompt}</span>
              </div>
            </CardContent>
          </Card>
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
