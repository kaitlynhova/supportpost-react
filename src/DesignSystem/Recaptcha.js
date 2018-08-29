import React from 'react';
import styled from 'styled-components';
import ReCAPTCHA from 'react-google-recaptcha';

import { Col } from 'react-bootstrap';
import { theme } from './theme';

const RecaptchaArea = styled.div`
  padding-bottom: ${theme.space.standard}px;
`;

export const Recaptcha = props => (
  <Col xs={12} md={4}>
    <RecaptchaArea>
      <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_KEY} onChange={this.updateRecaptcha} />
    </RecaptchaArea>
  </Col>
);
