import React from 'react';
import styled from 'styled-components';
import { colors, view } from '../../GlobalStyles';
import MenuCircles from '../Components/MenuCircles';
import Resume from '../Components/Resume';
// import Leaf from '../Components/Leaf';

import telegram from '../../Assets/Images/telegram.png';
import mail from '../../Assets/Images/email.png';
import linkedin from '../../Assets/Images/linkedin.png';
import girl from '../../Assets/Images/talk_girl.png';

export default function Contact() {
  const View = styled.section`
    background: transparent radial-gradient(40% 40% at 25% 50%, #d69050 0%, #c0844e 100%) 0% 0% no-repeat padding-box;
    width: 100%;
    overflow: hidden;
    min-height: 100vh;
    padding: 25px 0 5px;
    display: flex;
    flex-direction: column;
    .container {
      display: flex;
      flex-direction: column;
      flex: 1;
      max-height: ${view.max_h};
      @media screen and (max-width: 1199px) {
        .row .paddbt {
          padding-bottom: 50px;
        }
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

  const ContactAddress = styled.address`
    @media screen and (min-width: 1200px) {
      &.t50 {
        top: 75px;
      }
    }
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
      transition: 300ms ease-in-out;
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
              <Resume text={colors.brown1} before={colors.brown1} after={colors.brown2} />
            </div>
            <div className="col-xxl-6 col-xl-4 col-md-12 paddbt">
              <MenuCircles
                four={colors.blue2}
                three={colors.brown1}
                text={colors.blue2}
                hover={colors.blue3}
                bg={colors.brown1}
                links={colors.brown2}
              />
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-12 text-end">{/* <Leaf /> */}</div>
            <div className="col-lg-4 text-center">
              <ContactAddress className="t50">
                <a href="https://t.me/hyosz" title="Text me on Telegram" target="_blank" rel="noopener noreferrer">
                  <img src={telegram} alt="Telegram Icon" />
                  <span>t.me/hyosz</span>
                </a>
              </ContactAddress>
            </div>
            <div className="col-lg-4 text-center">
              <ContactAddress>
                <a
                  href="mailto:hyolanda.h@gmail.com"
                  title="Send me an email"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={mail} alt="Telegram Icon" />
                  <span>hyolanda.h@gmail</span>
                </a>
              </ContactAddress>
            </div>
            <div className="col-lg-4 text-center">
              <ContactAddress className="t50">
                <a
                  href="https://www.linkedin.com/in/hyolanda-fava/"
                  title="Send me a message on LinkedIn"
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
