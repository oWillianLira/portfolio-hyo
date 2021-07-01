import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, view } from '../../GlobalStyles';

import Menu from '../Components/Menu';
import girl from '../../Assets/Images/welcome_girl.png';

export default function Home() {
  const View = styled.section`
    width: 100%;
    min-height: 100vh;
    padding: 25px 0 0;
    background: transparent radial-gradient(40% 40% at 25% 50%, #44769e 0%, #3a4d5c 100%) 0% 0% no-repeat padding-box;
    display: flex;
    flex-direction: column;
    .container {
      flex: 1;
      display: flex;
      flex-direction: column;
      max-height: ${view.max_h};
      .row.expanded {
        flex: 1;
      }
    }
    @media screen and (min-width: 576px) {
      .contact {
        display: none;
      }
    }
  `;

  const Lines = styled.div`
    position: absolute;
    right: 0;
    top: -150px;
    svg {
      width: 150px;
      max-width: 20vw;
    }
  `;

  const Circles = styled.div`
    width: 100%;
    text-align: center;
    svg {
      max-width: 150px;
    }
    @media screen and (max-width: 767px) {
      margin-bottom: 25px;
    }
    @media screen and (max-width: 575px) {
      margin-bottom: 0;
    }
  `;

  const Welcome = styled.div`
    padding-top: 50px;
    font-family: 'Viaoda Libre', cursive !important;
    color: #fff;
    margin: 0 auto;
    text-align: center;
    h3 {
      font-weight: 200;
      font-size: 3.5em;
    }
    h1 {
      margin: 0;
      font-weight: 200;
      max-width: 100%;
    }
    p {
      font-size: 2em;
      text-align: right;
    }
    @media screen and (max-width: 575px) {
      font-size: 10px;
      > * {
        text-align: left !important;
      }
    }
    @media screen and (max-width: 450px) {
      max-width: 300px;
      margin: 0;
    }
  `;

  const Contact = styled(Link)`
    color: #fff;
    margin-bottom: 75px;
    font-size: 1.8em;
    letter-spacing: 0;
    position: relative;
    height: 200px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      color: #fff;
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
      border: solid 1px ${colors.brown1};
      transform: rotate(15deg);
      margin-left: 10px;
      margin-top: -10px;
      transition: 400ms ease-in;
    }
    &::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      border: solid 1px ${colors.blue1};
      transform: rotate(15deg);
      margin-left: -10px;
      margin-top: 10px;
      transition: 1000ms ease-in-out;
    }
    @media screen and (max-width: 991px) {
      height: 150px;
      width: 150px;
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

  const Girl = styled.picture`
    img {
      @media (min-width: 1600px) {
        width: 675px;
      }
      @media screen and (max-width: 575px) {
        width: 425px;
        max-width: 85%;
      }
    }
  `;

  return (
    <main className="page">
      <View>
        <Lines>
          <svg xmlns="http://www.w3.org/2000/svg" width="200.707" height="440.707" viewBox="0 0 200.707 440.707">
            <g id="lines" transform="translate(-1719.646 160.354)">
              <line
                id="Linha_1"
                data-name="Linha 1"
                y1="200"
                x2="200"
                transform="translate(1720)"
                fill="none"
                stroke="#d1b9a1"
                stroke-width="1"
              />
              <line
                id="Linha_2"
                data-name="Linha 2"
                y1="200"
                x2="200"
                transform="translate(1720 80)"
                fill="none"
                stroke="#d1b9a1"
                stroke-width="1"
              />
              <line
                id="Linha_3"
                data-name="Linha 3"
                y1="200"
                x2="200"
                transform="translate(1720 -80)"
                fill="none"
                stroke="#d1b9a1"
                stroke-width="1"
              />
              <line
                id="Linha_4"
                data-name="Linha 4"
                y1="200"
                x2="200"
                transform="translate(1720 -160)"
                fill="none"
                stroke="#d1b9a1"
                stroke-width="1"
              />
            </g>
          </svg>
        </Lines>
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col-xxl-6 col-xl-4 col-md-12">
              <Circles>
                <svg xmlns="http://www.w3.org/2000/svg" width="165" height="45" viewBox="0 0 165 45">
                  <g id="circles" transform="translate(-878 -75)">
                    <g
                      id="Elipse_6"
                      data-name="Elipse 6"
                      transform="translate(878 75)"
                      fill="none"
                      stroke="#d1b9a1"
                      stroke-width="2"
                    >
                      <circle cx="15" cy="15" r="15" stroke="none" />
                      <circle cx="15" cy="15" r="14" fill="none" />
                    </g>
                    <g
                      id="Elipse_7"
                      data-name="Elipse 7"
                      transform="translate(923 75)"
                      fill="none"
                      stroke="#d1b9a1"
                      stroke-width="2"
                    >
                      <circle cx="15" cy="15" r="15" stroke="none" />
                      <circle cx="15" cy="15" r="14" fill="none" />
                    </g>
                    <g
                      id="Elipse_8"
                      data-name="Elipse 8"
                      transform="translate(968 75)"
                      fill="none"
                      stroke="#d1b9a1"
                      stroke-width="2"
                    >
                      <circle cx="15" cy="15" r="15" stroke="none" />
                      <circle cx="15" cy="15" r="14" fill="none" />
                    </g>
                    <g
                      id="Elipse_9"
                      data-name="Elipse 9"
                      transform="translate(1013 75)"
                      fill="none"
                      stroke="#d1b9a1"
                      stroke-width="2"
                    >
                      <circle cx="15" cy="15" r="15" stroke="none" />
                      <circle cx="15" cy="15" r="14" fill="none" />
                    </g>
                    <circle
                      id="Elipse_10"
                      data-name="Elipse 10"
                      cx="15"
                      cy="15"
                      r="15"
                      transform="translate(900 90)"
                      fill="#5a86a9"
                    />
                    <circle
                      id="Elipse_11"
                      data-name="Elipse 11"
                      cx="15"
                      cy="15"
                      r="15"
                      transform="translate(945 90)"
                      fill="#5a86a9"
                    />
                    <circle
                      id="Elipse_12"
                      data-name="Elipse 12"
                      cx="15"
                      cy="15"
                      r="15"
                      transform="translate(990 90)"
                      fill="#5a86a9"
                    />
                  </g>
                </svg>
              </Circles>
            </div>
            <div className="col"></div>
          </div>
          <Welcome>
            <h3>Hello!</h3>
            <h1>Welcome to Hyolanda's Portfolio</h1>
            <p>Fell free to look around!</p>
          </Welcome>
          <div className="row expanded align-items-end position-relative">
            <div className="col-xxl-3 col-xl-4 col-md-4 col-sm-5">
              <Contact to="/contact/">
                <span>Get in touch</span>
              </Contact>
            </div>
            <div className="col-xxl-6 col-xl-4 col-md-8 col-sm-7 text-center">
              <Girl>
                <img src={girl} alt="Welcome girl" />
              </Girl>
            </div>
            <div className="col-xxl-3 col-xl-4 text-end">
              <Menu c1="#fff" c2={colors.brown1}></Menu>
            </div>
          </div>
        </div>
      </View>
    </main>
  );
}
