import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';

import { colors } from '../../../GlobalStyles';

import cartaz1 from '../../../Arts/static/cartaz1.jpg';
import mockup1 from '../../../Arts/static/cartaz1-mockup.png';
import cartaz2 from '../../../Arts/static/cartaz2.jpg';
import mockup2 from '../../../Arts/static/cartaz2-mockup.png';
import cartaz3 from '../../../Arts/static/cartaz3.jpg';
import mockup3 from '../../../Arts/static/cartaz3-mockup.png';
import cartaz4 from '../../../Arts/static/cartaz4.jpg';
import mockup4 from '../../../Arts/static/cartaz4-mockup.png';
import cartaz5 from '../../../Arts/static/cartaz5.jpg';
import mockup5 from '../../../Arts/static/cartaz5-mockup.png';
import cartaz6 from '../../../Arts/static/cartaz6.jpg';
import mockup6 from '../../../Arts/static/cartaz6-mockup.png';

export default function SliderArts() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
        },
      },
    ],
  };

  const options = {
    settings: {
      slideAnimationType: 'slide',
    },
    buttons: {
      showThumbnailsButton: false,
      showDownloadButton: false,
    },
    thumbnails: {
      showThumbnails: false,
    },
  };

  const Mural = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      width: 1199px;
      padding-bottom: 15px;
      max-width: 90%;
      margin: 0 auto;
      text-align: center;
      @media screen and (max-width: 1440px) {
        width: 720px;
      }
      @media screen and (max-width: 425px) {
        max-width: 85%;
        .slick-prev {
          left: -10px;
        }
        .slick-next {
          right: -10px;
        }
      }
    }
    .slick-slider .slick-arrow:before {
      color: ${colors.brown2};
      transition: 200ms;
      font-size: 26px;
    }
    .slick-dots {
      li.slick-active button:before {
        color: ${colors.brown2};
      }
      @media screen and (max-width: 767px) {
        li button:before {
          font-size: 12px;
        }
      }
    }
  `;

  const MiniPreview = styled.div`
    padding: 15px 0;
    a {
      display: inline-block;
      img {
        width: 400px;
        -webkit-box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.8);
        box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.8);
        @media screen and (max-width: 1440px) {
          width: 225px;
        }
        @media screen and (max-width: 767px) {
          width: 350px;
        }
        @media screen and (max-width: 425px) {
          width: 225px;
        }
      }
      &:focus {
        outline: none;
      }
    }
  `;

  return (
    <Mural>
      <SimpleReactLightbox>
        <SRLWrapper options={options}>
          <Slider {...settings}>
            <MiniPreview>
              <a href={cartaz3}>
                <img src={mockup3} alt="Hyolanda Fava" />
              </a>
            </MiniPreview>
            <MiniPreview>
              <a href={cartaz4}>
                <img src={mockup4} alt="Norway" />
              </a>
            </MiniPreview>
            <MiniPreview>
              <a href={cartaz1}>
                <img src={mockup1} alt="Oh ok, but!" />
              </a>
            </MiniPreview>
            <MiniPreview>
              <a href={cartaz2}>
                <img src={mockup2} alt="Team Croatia" />
              </a>
            </MiniPreview>
            <MiniPreview>
              <a href={cartaz6}>
                <img src={mockup6} alt="Long live love" />
              </a>
            </MiniPreview>
            <MiniPreview>
              <a href={cartaz5}>
                <img src={mockup5} alt="Live life now" />
              </a>
            </MiniPreview>
          </Slider>
        </SRLWrapper>
      </SimpleReactLightbox>
    </Mural>
  );
}
