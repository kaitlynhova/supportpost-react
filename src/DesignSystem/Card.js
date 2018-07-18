import React from "react";
import PropTypes from "prop-types";
import { theme } from "./theme";
import styled from "styled-components";

const CardContainer = styled.div`
  font-family: ${theme.fonts.primary};
  color: ${theme.colors.white};
  background-color: ${theme.colors.black};
`;
const Reason = styled.p`
  font-size: 30px;
`;
const Person = styled.p`
  font-size: 18px;
`;

export const Card = props => (
  <CardContainer>
    <a href={"/card/" + props.id}>
      <Reason>{props.reason}</Reason>
      <Person>
        -{props.name} @ {props.location}
      </Person>
    </a>
  </CardContainer>
);

Card.propTypes = PropTypes.shape({
  id: PropTypes.string,
  reason: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string
});

export default Card;
