import React from 'react';
import styled from 'styled-components';
import { colors } from '../../GlobalStyles';
import MenuCircles from '../Components/MenuCircles';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';

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
  const options = {
    settings: {
      slideAnimationType: 'slide',
      slideTransitionTimingFunction: 'backIn',
    },
    buttons: {
      showThumbnailsButton: false,
      showDownloadButton: false,
      showAutoplayButton: false,
    },
    thumbnails: {
      showThumbnails: false,
    },
  };

  const View = styled.section`
    background: transparent radial-gradient(40% 40% at 25% 50%, #fff 0%, #f3eae0 100%) 0% 0% no-repeat padding-box;
    width: 100%;
    min-height: 100vh;
    padding: 25px 0 50px;
    display: flex;
    flex-direction: column;
    .container .row {
      margin-top: 75px;
      @media screen and (max-width: 991px) {
        .art_area {
          margin-top: unset !important;
          transition: 500ms;
          &:nth-child(2n + 1) {
            margin: -80px 0 !important;
            div {
              text-align: left;
            }
          }
          &:last-child {
            margin-bottom: 10px !important;
          }
          div {
            text-align: right;
          }
        }
      }
      @media screen and (max-width: 450px) {
        .art_area:nth-child(2n + 1) {
          margin: 50px 0 !important;
        }
      }
      @media screen and (max-width: 375px) {
        .art_area div {
          text-align: center !important;
        }
      }
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
    margin-bottom: 50px;
  `;

  const Art = styled.div`
    text-align: center;
    a {
      img {
        transition: 500ms;
        width: 275px;
        -webkit-box-shadow: 2px 2px 10px 2px rgba(20, 0, 0, 0.8);
        box-shadow: 2px 2px 10px 2px rgba(20, 0, 0, 0.8);
        @media screen and (max-width: 767px) {
          width: 200px;
        }
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
          <SimpleReactLightbox>
            <SRLWrapper options={options}>
              <div className="row ">
                <div className="col-md-8">
                  <Intro>
                    <h3>Take a look at some of my works</h3>
                    <h3>Here it is some of my Static Arts...</h3>
                  </Intro>
                </div>
                <div className="art_area col-lg-4">
                  <Art>
                    <a href={cartaz3}>
                      <img src={mockup3} alt="Hyolanda Fava" />
                    </a>
                  </Art>
                </div>
                <div className="art_area col-lg-4" Style="margin-top: -190px;">
                  <Art>
                    <a href={formiga}>
                      <img src={formiga_mockup} alt="Formiga, football player" />
                    </a>
                  </Art>
                </div>
                <div className="art_area col-lg-4">
                  <Art>
                    <a href={cartaz4}>
                      <img src={mockup4} alt="Norway" />
                    </a>
                  </Art>
                </div>
                <div className="art_area col-lg-4" Style="margin-top: 190px;">
                  <Art>
                    <a href={talkart}>
                      <img src={talkart} alt="African Culture - Special Event" />
                    </a>
                  </Art>
                </div>
                <div className="art_area col-lg-4" Style="margin-top: -190px;">
                  <Art>
                    <a href={cartaz2}>
                      <img src={mockup2} alt="Croatia - Euro 2020" />
                    </a>
                  </Art>
                </div>
                <div className="art_area col-lg-4">
                  <Art>
                    <a href={cartaz6}>
                      <img src={mockup6} alt="Long Live Love" />
                    </a>
                  </Art>
                </div>
                <div className="art_area col-lg-4" Style="margin-top: 190px;">
                  <Art>
                    <a href={cartaz5}>
                      <img src={mockup5} alt="Live Life Now" />
                    </a>
                  </Art>
                </div>
                <div className="art_area col-lg-4" Style="margin-top: -190px;">
                  <Art>
                    <a href={cartaz1}>
                      <img src={mockup1} alt="Oh, ok. but!" />
                    </a>
                  </Art>
                </div>
              </div>
            </SRLWrapper>
          </SimpleReactLightbox>
        </div>
      </View>
    </main>
  );
}
