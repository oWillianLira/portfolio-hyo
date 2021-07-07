import React from 'react';
import styled from 'styled-components';
import { colors } from '../../GlobalStyles';
import MenuCircles from '../Components/MenuCircles';

import cartaz1 from '../../Arts/static/cartaz1.jpg';
import mockup1 from '../../Arts/static/cartaz1-mockup.png';
import cartaz2 from '../../Arts/static/cartaz2.jpg';
import mockup2 from '../../Arts/static/cartaz2-mockup.png';
import cartaz3 from '../../Arts/static/cartaz3.jpg';
import mockup3 from '../../Arts/static/cartaz3-mockup.png';
import cartaz4 from '../../Arts/static/cartaz4.jpg';
import mockup4 from '../../Arts/static/cartaz4-mockup.png';
import cartaz5 from '../../Arts/static/cartaz5.jpg';
import mockup5 from '../../Arts/static/cartaz5-mockup.png';
import cartaz6 from '../../Arts/static/cartaz6.jpg';
import mockup6 from '../../Arts/static/cartaz6-mockup.png';
import formiga from '../../Arts/static/formiga.jpg';
import formiga_mockup from '../../Arts/static/formiga-mockup.png';
import talkart from '../../Arts/static/talkart.jpg';

export default function Static() {
  const View = styled.section`
    background: transparent radial-gradient(40% 40% at 25% 50%, #fff 0%, #f3eae0 100%) 0% 0% no-repeat padding-box;
    width: 100%;
    min-height: 100vh;
    padding: 25px 0 50px;
    display: flex;
    flex-direction: column;
    .container .row {
      margin-top: 75px;
    }
  `;

  const Intro = styled.div`
    h3 {
      font-size: 2em;
      font-weight: 600;
      font-family: 'Viaoda Libre', cursive !important;
      color: ${colors.brown2};
      line-height: 1.5em;
    }
  `;

  const Art = styled.div`
    text-align: center;
    a {
      img {
        width: 275px;
        -webkit-box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.8);
        box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.8);
      }
    }
  `;

  return (
    <main className="page">
      <View>
        <div className="container">
          <MenuCircles
            four={colors.blue1}
            three={colors.brown2}
            text={colors.blue2}
            hover={colors.blue1}
            bg={colors.brown2}
            links={colors.brown1}
          />
          <div className="row ">
            <div className="col-md-8">
              <Intro>
                <h3>
                  Take a look at some of my works <br />
                  Here it is some of my Static Arts...
                </h3>
              </Intro>
            </div>
            <div className="col-md-4">
              <Art>
                <a href={cartaz3}>
                  <img src={mockup3} alt="Hyolanda Fava" />
                </a>
              </Art>
            </div>
            <div className="col-md-4" Style="margin-top: -190px;">
              <Art>
                <a href={formiga}>
                  <img src={formiga_mockup} alt="Hyolanda Fava" />
                </a>
              </Art>
            </div>
            <div className="col-md-4">
              <Art>
                <a href={cartaz4}>
                  <img src={mockup4} alt="Norway" />
                </a>
              </Art>
            </div>
            <div className="col-md-4" Style="margin-top: 190px;">
              <Art>
                <a href={talkart}>
                  <img src={talkart} alt="Norway" />
                </a>
              </Art>
            </div>
            <div className="col-md-4" Style="margin-top: -190px;">
              <Art>
                <a href={cartaz2}>
                  <img src={mockup2} alt="Hyolanda Fava" />
                </a>
              </Art>
            </div>
            <div className="col-md-4">
              <Art>
                <a href={cartaz6}>
                  <img src={mockup6} alt="Hyolanda Fava" />
                </a>
              </Art>
            </div>
            <div className="col-md-4" Style="margin-top: 190px;">
              <Art>
                <a href={cartaz5}>
                  <img src={mockup5} alt="Hyolanda Fava" />
                </a>
              </Art>
            </div>
            <div className="col-md-4" Style="margin-top: -190px;">
              <Art>
                <a href={cartaz1}>
                  <img src={mockup1} alt="Hyolanda Fava" />
                </a>
              </Art>
            </div>
          </div>
        </div>
      </View>
    </main>
  );
}
