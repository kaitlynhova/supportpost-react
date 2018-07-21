import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from './theme';
import logo from '../Images/logo.svg';

const NavContainer = styled.div`
  background-color: ${theme.colors.white};
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
  padding: ${theme.space.standard / 2 - 1}px;
  position: fixed;
  width: 100%;
  z-index: 20;
  a {
    color: ${theme.colors.black};
    font-family: ${theme.fonts.primary};
  }
  span {
    @media only screen and (max-width: ${theme.breakpoints.small}px) {
      display: none;
    }
  }
  h2 {
    color: ${theme.colors.black};
    display: inline;
  }
  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    margin-top: -10px;
  }
  ul {
    float: right;
    margin: 0;
  }
  li {
    display: inline;
    font-size: ${theme.fontSizes.p}px;
    padding: 20px;
    &.post {
      background: black;
      margin-right: -15px;
      a {
        color: white;
      }
    }
  }
`;

const Nav = props => (
  <span>
    <NavContainer>
      <a href="/">
        <img alt="logo" src={logo} />
        <h2>
          S<span>upport</span>P<span>ost</span>
        </h2>
      </a>
      <ul>
        <li>
          <a href="/about">How it works</a>
        </li>
        <li className="post">
          <a href="/">Post!</a>
        </li>
      </ul>
    </NavContainer>
  </span>
);

export default Nav;
