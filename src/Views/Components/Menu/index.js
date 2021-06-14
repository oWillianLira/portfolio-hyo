import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../../GlobalStyles';
import { Link } from 'react-router-dom';

export default function Menu(props) {
  const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    ul {
      list-style: none;
      a {
        color: ${props.c1};
        font-size: 1.8em;
        letter-spacing: 2px;
        display: inline-block;
        margin-bottom: 15px;
        transition: 300ms;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          left: -5px;
          bottom: 0;
          right: 98%;
          height: 4px;
          background-color: ${props.c2};
          transition: 300ms ease-out;
        }
        &:hover::after {
          right: -5px;
        }
      }
    }
  `;

  return (
    <Nav>
      <ul>
        <li>
          <Link to="/about">About me</Link>
        </li>
        <li>
          <Link to="/static">Static arts</Link>
        </li>
        <li>
          <Link to="/animations">Animations</Link>
        </li>
      </ul>
    </Nav>
  );
}
