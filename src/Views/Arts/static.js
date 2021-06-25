import React from 'react';
import styled from 'styled-components';
import { colors } from '../../GlobalStyles';
import Menu from '../Components/Menu';
import SliderArts from '../Components/Slider';

export default function Static() {
  const View = styled.section`
    background: transparent radial-gradient(40% 40% at 25% 50%, #fff 0%, #f3eae0 100%) 0% 0% no-repeat padding-box;
    width: 100%;
    min-height: 100vh;
    padding: 25px 0 5px;
    display: flex;
    flex-direction: column;
    .container {
      display: flex;
      flex-direction: column;
      flex: 1;
      .row.expanded {
        flex: 1;
      }
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

  return (
    <main className="page">
      <View>
        <div className="container">
          <div className="row">
            <div className="col-xxl-3 col-xl-4"></div>
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
          </div>
          <SliderArts></SliderArts>
        </div>
      </View>
    </main>
  );
}
