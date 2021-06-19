import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Menu(props) {
  const Nav = styled.nav`
    ul {
      list-style: none;
      padding: 0;
      margin-bottom: 15px;
      a {
        color: ${props.c1};
        font-size: 1.6em;
        letter-spacing: 2px;
        display: inline-block;
        margin-bottom: 10px;
        transition: 300ms;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          left: -5px;
          bottom: -2px;
          right: 98%;
          min-width: 15px;
          height: 4px;
          background-color: ${props.c2};
          transition: 300ms ease-out;
        }
        &:hover::after {
          right: -5px;
        }
      }
      @media screen and (max-width: 1199px) {
        display: flex;
        justify-content: space-between;
      }
    }
    @media screen and (max-width: 575px) {
      display: none;
    }
  `;

  window.homepagecheck = function () {
    var check = false;
    if (document.location.pathname === '/') {
      check = true;
    }
    return check;
  };

  return (
    <Nav>
      <ul>
        {!window.homepagecheck() && (
          <li>
            <Link to="/">Welcome</Link>
          </li>
        )}
        <li>
          <Link to="/about/">About me</Link>
        </li>
        <li>
          <Link to="/static/">Static arts</Link>
        </li>
        <li>
          <Link to="/animations/">Animations</Link>
        </li>
      </ul>
    </Nav>
  );
}
