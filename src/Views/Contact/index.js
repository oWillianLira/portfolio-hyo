import React from 'react';
import styled from 'styled-components';
import { colors } from '../../GlobalStyles';
import Menu from '../Components/Menu';

import telegram from '../../Assets/Images/telegram.png';
import mail from '../../Assets/Images/email.png';
import linkedin from '../../Assets/Images/linkedin.png';
import girl from '../../Assets/Images/talk_girl.png';

export default function Contact() {
  const View = styled.section`
    background: transparent radial-gradient(40% 40% at 25% 50%, #d69050 0%, #c0844e 100%) 0% 0% no-repeat padding-box;
    width: 100%;
    min-height: 100vh;
    padding: 25px 0 5px;
    display: flex;
    flex-direction: column;
    .container {
      display: flex;
      flex-direction: column;
      flex: 1;
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
      max-width: 125px;
    }
    @media screen and (max-width: 767px) {
      margin-bottom: 25px;
    }
    @media screen and (max-width: 575px) {
      margin-bottom: 0;
    }
  `;

  const ContactAddress = styled.address`
    position: relative;
    min-height: 100px;
    max-width: 325px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    a img {
      width: 75px;
      height: auto;
      @media screen and (max-width: 991px) {
        width: 50px;
      }
    }
    a span {
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 1.5em;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 100%;
      transform: translate(-50%, -50%);
      transition: 300ms ease-in;
    }
    &:hover span {
      top: 100%;
      @media screen and (max-width: 767px) {
        top: 90%;
      }
    }
    @media screen and (max-width: 400px) {
      min-height: 85px;
    }
  `;

  const Girl = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
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
                  <g id="circles3" transform="translate(-878 -75)">
                    <g
                      id="Elipse_6"
                      data-name="Elipse 6"
                      transform="translate(878 75)"
                      fill="none"
                      stroke="#3a4d5c"
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
                      stroke="#3a4d5c"
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
                      stroke="#3a4d5c"
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
                      stroke="#3a4d5c"
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
                      fill="#d1b9a1"
                    />
                    <circle
                      id="Elipse_11"
                      data-name="Elipse 11"
                      cx="15"
                      cy="15"
                      r="15"
                      transform="translate(945 90)"
                      fill="#d1b9a1"
                    />
                    <circle
                      id="Elipse_12"
                      data-name="Elipse 12"
                      cx="15"
                      cy="15"
                      r="15"
                      transform="translate(990 90)"
                      fill="#d1b9a1"
                    />
                  </g>
                </svg>
              </Circles>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-12 text-end">
              <Menu c1="#fff" c2={colors.brown2}></Menu>
            </div>
            <div className="col-lg-4 text-center">
              <ContactAddress>
                <a href="https://t.me/hyosz" title="Text me on Telegram" target="_blank" rel="noopener noreferrer">
                  <img src={telegram} alt="Telegram Icon" />
                  <span>t.me/hyosz</span>
                </a>
              </ContactAddress>
            </div>
            <div className="col-lg-4 text-center">
              <ContactAddress>
                <a href="mailto:hyolanda.h@gmail.com" title="Send me a email" target="_blank" rel="noopener noreferrer">
                  <img src={mail} alt="Telegram Icon" />
                  <span>hyolanda.h@gmail</span>
                </a>
              </ContactAddress>
            </div>
            <div className="col-lg-4 text-center">
              <ContactAddress>
                <a
                  href="https://www.linkedin.com/in/hyolanda-fava/"
                  title="Contact me via LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="Telegram Icon" />
                  <span>in/hyolanda-fava</span>
                </a>
              </ContactAddress>
            </div>
          </div>
          <Girl>
            <img src={girl} alt="Me answering your messages" />
          </Girl>
        </div>
      </View>
    </main>
  );
}
