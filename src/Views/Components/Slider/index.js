import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import { colors } from '../../../GlobalStyles';

import cartaz1 from '../../../Arts/static/cartaz1.jpg';
import mockup1 from '../../../Arts/static/cartaz1-mockup.png';
import cartaz2 from '../../../Arts/static/cartaz2.jpg';
import mockup2 from '../../../Arts/static/cartaz2-mockup.png';
import cartaz3 from '../../../Arts/static/cartaz3.jpg';
import mockup3 from '../../../Arts/static/cartaz3-mockup.png';
import cartaz4 from '../../../Arts/static/cartaz4.jpg';
import mockup4 from '../../../Arts/static/cartaz4-mockup.png';

// function importAll(r) {
//   return r.keys().map(r);
// }
// const images = importAll(require.context('../../../Arts/static', false, /\.(png|jpe?g|svg)$/));

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

  const Mural = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      width: 1024px;
      max-width: 100%;
      text-align: center;
      @media screen and (max-width: 1440px) {
        width: 720px;
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
    a {
      display: inline-block;
      img {
        width: 400px;
        @media screen and (max-width: 1440px) {
          width: 275px;
        }
        @media screen and (max-width: 767px) {
          width: 375px;
        }
      }
      &:focus {
        outline: none;
      }
    }
  `;

  return (
    <Mural>
      <Slider {...settings}>
        <MiniPreview>
          <a href="#">
            <img src={mockup3} alt="Hyolanda Fava" />
          </a>
        </MiniPreview>
        <MiniPreview>
          <a href="#">
            <img src={mockup4} alt="Norway" />
          </a>
        </MiniPreview>
        <MiniPreview>
          <a href="#">
            <img src={mockup1} alt="Oh ok, but!" />
          </a>
        </MiniPreview>
        <MiniPreview>
          <a href="#">
            <img src={mockup2} alt="Team Croatia" />
          </a>
        </MiniPreview>
      </Slider>
    </Mural>
  );
}
