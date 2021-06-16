import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../GlobalStyles';

import Menu from '../Components/Menu';

export default function Contact() {
  const View = styled.main`
    background: transparent radial-gradient(40% 40% at 25% 50%, #d69050 0%, #ac703a 100%) 0% 0% no-repeat padding-box;
    width: 100%;
    min-height: 100vh;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    .container {
      flex: 1;
      display: flex;
      flex-direction: column;
      .row {
        flex: 1;
      }
    }
  `;

  const Resume = styled.a`
    color: ${colors.brown1};
    font-size: 1.6em;
    letter-spacing: 0;
    line-height: 1;
    position: relative;
    top: 0;
    height: 150px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      color: ${colors.brown1};
      letter-spacing: 2px;
      span {
        transform: rotate(0deg);
      }
      &::before {
        transform: rotate(0deg);
        margin: 0;
      }
      &::after {
        transform: rotate(0deg);
        margin-left: 10px;
        margin-top: -10px;
      }
    }
    span {
      transform: rotate(-15deg);
      transition: 400ms ease-in;
    }
    &::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      border: solid 2px ${colors.brown1};
      transform: rotate(15deg);
      margin-left: 8px;
      margin-top: -8px;
      transition: 400ms ease-in;
    }
    &::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      border: solid 2px ${colors.brown2};
      transform: rotate(15deg);
      margin-left: -8px;
      margin-top: 8px;
      transition: 1000ms ease-in-out;
    }
    @media screen and (max-width: 767px) {
      height: 130px;
      width: 130px;
      margin: 0 auto 50px;
    }
    @media screen and (max-width: 575px) {
      display: none;
    }
  `;

  return (
    <main className="page">
      <View>
        <div className="container">
          <div className="row">
            <div className="col-">
              <Resume href="#">
                <span>
                  Get my <br />
                  resume
                </span>
              </Resume>
            </div>
            <Link to="/">HOME</Link>
          </div>
        </div>
      </View>
    </main>
  );
}
