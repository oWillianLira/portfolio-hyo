import React from 'react';
import styled from 'styled-components';
import { colors, view } from '../../GlobalStyles';
import MenuCircles from '../Components/MenuCircles';
import Resume from '../Components/Resume';

import girl from '../../Assets/Images/about_girl.png';

export default function About() {
  const View = styled.section`
    background: transparent radial-gradient(40% 40% at 25% 50%, #d1b9a1 0%, #f3eae0 100%) 0% 0% no-repeat padding-box;
    width: 100%;
    min-height: 100vh;
    padding: 25px 0 5px;
    display: flex;
    flex-direction: column;
    .container {
      display: flex;
      flex-direction: column;
      flex: 1;
      max-height: ${view.max_h};
      .row.expanded {
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

  const About = styled.ul`
    padding: 0 0 20px 0;
    margin: 0;
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1199px) {
      padding-bottom: 0;
    }
    li {
      font-size: 1.3em;
      margin-bottom: 10px;
      h1 {
        font-size: 1.5em;
        font-weight: normal;
        margin: 0;
        color: ${colors.blue3};
      }
    }
    .cv {
      display: none;
      @media screen and (max-width: 767px) {
        display: block;
        a {
          font-size: 1.25em;
          color: ${colors.brown2};
          font-weight: 500;
          text-transform: uppercase;
        }
      }
    }
  `;

  return (
    <main className="page">
      <View>
        <div className="container">
          <div className="row">
            <div className="col-xxl-3 col-xl-4">
              <Resume text={colors.brown2} before={colors.brown2} after={colors.blue1} />
            </div>
            <div className="col-xxl-6 col-xl-4 col-md-12">
              <MenuCircles
                four={colors.blue1}
                three={colors.brown2}
                text={colors.blue2}
                hover={colors.blue1}
                bg={colors.blue2}
                links={colors.brown1}
              />
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-12 text-end">
              {/* <Menu c1={colors.brown2} c2={colors.blue1}></Menu> */}
            </div>
          </div>
          <div className="row expanded">
            <div className="col-xl-5">
              <About>
                <li title="That's not my full name">
                  <h1>Hyolanda Fava</h1>
                </li>
                <li title="My birthday is on May 13th">Existing since May/1996</li>
                <li title="Help me to move away!">Living in Guarulhos/SP (Brazil)</li>
                <li title="I took some time to discover my professional passion">
                  Working with Digital Design since Jan/2021
                </li>
                <li className="cv" title="Check my resume">
                  <a
                    href="https://drive.google.com/file/d/128XDkeQmIZ5WHqU5ayQ3mUybW4NZdOJz/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    › Get my resume ‹
                  </a>
                </li>
              </About>
            </div>
            <div className="col-xl-7">
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
