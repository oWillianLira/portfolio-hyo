import React from 'react';
import styled from 'styled-components';
import { colors } from '../../GlobalStyles';
import Menu from '../Components/Menu';

import girl from '../../Assets/Images/about_girl.png';

export default function About() {
  const View = styled.section`
    background: transparent radial-gradient(40% 40% at 25% 50%, #d1b9a1 0%, #f3eae0 100%) 0% 0% no-repeat padding-box;
    width: 100%;
    min-height: 100vh;
    padding: 50px 0 5px;
    display: flex;
    flex-direction: column;
    .container {
      display: flex;
      flex-direction: column;
      flex: 1;
      .row {
        flex: 1;
      }
    }
    @media screen and (max-width: 767px) {
      .text-center:last-of-type {
        margin-bottom: 25px;
      }
    }
    @media screen and (max-width: 400px) {
      padding-top: 25px;
    }
  `;

  const Resume = styled.a`
    color: ${colors.brown2};
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
      color: ${colors.brown2};
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
      border: solid 2px ${colors.brown2};
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
      border: solid 2px ${colors.blue1};
      transform: rotate(15deg);
      margin-left: -8px;
      margin-top: 8px;
      transition: 1000ms ease-in-out;
    }
    @media screen and (max-width: 1199px) {
      position: absolute;
      top: 70vh;
    }
    @media screen and (max-width: 991px) {
      top: 40vh;
    }
    @media screen and (max-width: 767px) {
      display: none;
    }
  `;

  const Circles = styled.div`
    width: 100%;
    text-align: center;
    svg {
      max-width: 30%;
    }
    @media screen and (max-width: 767px) {
      margin-bottom: 25px;
    }
    @media screen and (max-width: 575px) {
      margin-bottom: 0;
    }
  `;

  const Girl = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    img {
      width: 700px;
      @media screen and (max-width: 1550px) {
        width: 500px;
      }
      @media screen and (max-width: 1366px) {
        width: 380px;
      }
      @media screen and (max-width: 991px) {
        width: 330px;
      }
    }
  `;

  return (
    <main className="page">
      <View>
        <div className="container">
          <div className="row">
            <div className="col-xxl-3 col-xl-4 col-md-5">
              <Resume
                target="_blank"
                href="https://drive.google.com/file/d/128XDkeQmIZ5WHqU5ayQ3mUybW4NZdOJz/view?usp=sharing"
              >
                <span>
                  Get my <br />
                  resume
                </span>
              </Resume>
            </div>
            <div className="col-xxl-6 col-xl-4 col-md-12">
              <Circles>
                <svg xmlns="http://www.w3.org/2000/svg" width="165" height="45" viewBox="0 0 165 45">
                  <g id="circles2" transform="translate(-878 -75)">
                    <g
                      id="Elipse_6"
                      data-name="Elipse 6"
                      transform="translate(878 75)"
                      fill="none"
                      stroke="#5a86a9"
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
                      stroke="#5a86a9"
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
                      stroke="#5a86a9"
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
                      stroke="#5a86a9"
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
                      fill="#c45030"
                    />
                    <circle
                      id="Elipse_11"
                      data-name="Elipse 11"
                      cx="15"
                      cy="15"
                      r="15"
                      transform="translate(945 90)"
                      fill="#c45030"
                    />
                    <circle
                      id="Elipse_12"
                      data-name="Elipse 12"
                      cx="15"
                      cy="15"
                      r="15"
                      transform="translate(990 90)"
                      fill="#c45030"
                    />
                  </g>
                </svg>
              </Circles>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-12 text-end">
              <Menu c1={colors.brown2} c2={colors.blue1}></Menu>
            </div>
            <div className="col-lg-5"></div>
            <div className="col-lg-7">
              <Girl>
                <img src={girl} alt="Me watching my version of the universe" />
              </Girl>
            </div>
          </div>
        </div>
      </View>
    </main>
  );
}
