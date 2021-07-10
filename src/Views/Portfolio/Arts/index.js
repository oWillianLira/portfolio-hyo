import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../GlobalStyles';
import MenuCircles from '../../Components/MenuCircles';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import AOS from 'aos';
import 'aos/dist/aos.css';

import cartaz1 from '../../../Uploads/Arts/cartaz1.jpg';
import mockup1 from '../../../Uploads/Arts/cartaz1-mockup.png';
import cartaz2 from '../../../Uploads/Arts/cartaz2.jpg';
import mockup2 from '../../../Uploads/Arts/cartaz2-mockup.png';
import cartaz3 from '../../../Uploads/Arts/cartaz3.jpg';
import mockup3 from '../../../Uploads/Arts/cartaz3-mockup.png';
import cartaz4 from '../../../Uploads/Arts/cartaz4.jpg';
import mockup4 from '../../../Uploads/Arts/cartaz4-mockup.png';
import cartaz5 from '../../../Uploads/Arts/cartaz5.jpg';
import mockup5 from '../../../Uploads/Arts/cartaz5-mockup.png';
import cartaz6 from '../../../Uploads/Arts/cartaz6.jpg';
import mockup6 from '../../../Uploads/Arts/cartaz6-mockup.png';
import formiga from '../../../Uploads/Arts/formiga.jpg';
import formiga_mockup from '../../../Uploads/Arts/formiga-mockup.png';
import talkart from '../../../Uploads/Arts/talkart.jpg';
import talkart_mockup from '../../../Uploads/Arts/talkart-mockup.png';

export default function Arts() {
  AOS.init({
    delay: 250,
    duration: 1250,
  });

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
    overflow-x: hidden;
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
                      <img data-aos="fade-down-left" src={mockup4} alt="Norway" />
                    </a>
                  </Art>
                </div>
                <div className="art_area col-lg-4" Style="margin-top: 190px;">
                  <Art>
                    <a href={talkart}>
                      <img data-aos="fade-down-left" src={talkart_mockup} alt="African Culture - Special Event" />
                    </a>
                  </Art>
                </div>
                <div className="art_area col-lg-4" Style="margin-top: -190px;">
                  <Art>
                    <a href={cartaz2}>
                      <img data-aos="fade-down-left" src={mockup2} alt="Croatia - Euro 2020" />
                    </a>
                  </Art>
                </div>
                <div className="art_area col-lg-4">
                  <Art>
                    <a href={cartaz6}>
                      <img data-aos="fade-down-left" src={mockup6} alt="Long Live Love" />
                    </a>
                  </Art>
                </div>
                <div className="art_area col-lg-4" Style="margin-top: 190px;">
                  <Art>
                    <a href={cartaz5}>
                      <img data-aos="fade-down-left" src={mockup5} alt="Live Life Now" />
                    </a>
                  </Art>
                </div>
                <div className="art_area col-lg-4" Style="margin-top: -190px;">
                  <Art>
                    <a href={cartaz1}>
                      <img data-aos="fade-down-left" src={mockup1} alt="Oh, ok. but!" />
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
