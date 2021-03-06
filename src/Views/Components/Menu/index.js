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
        font-size: 1.65em;
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
        &:hover::after,
        &:active::after {
          right: -5px;
        }
      }
      @media screen and (max-width: 1199px) {
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
      }
      @media screen and (max-width: 500px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        max-width: 90%;
        margin: 0 auto;
        text-align: left;
        li:nth-child(2),
        li:nth-child(4) {
          text-align: right;
        }
      }
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
            <Link to="/">Homepage</Link>
          </li>
        )}
        <li>
          <a target="blank" rel="noopener noreferrer" href="https://www.behance.net/hyolandafava-">
            Behance
          </a>
        </li>
        {!window.location.href.includes('contact') && (
          <li>
            <Link to="/contact/" className="contact">
              Contact
            </Link>
          </li>
        )}
        {!window.location.href.includes('about') && (
          <li>
            <Link to="/about/">About me</Link>
          </li>
        )}
        {!window.location.href.includes('arts') && (
          <li>
            <Link to="/arts/">Static Arts</Link>
          </li>
        )}
      </ul>
    </Nav>
  );
}
