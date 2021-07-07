import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function MenuCircles(props) {
  const Circles = styled.div`
    width: 100%;
    text-align: center;
    svg {
      max-width: 150px;
      cursor: pointer;
      text {
        transition: 300ms;
      }
      &:hover {
        text {
          fill: ${props.hover};
        }
      }
    }
    @media screen and (max-width: 767px) {
      margin-bottom: 25px;
    }
    @media screen and (max-width: 575px) {
      margin-bottom: 0;
    }
  `;

  const Menu = styled.div`
    > .modal > .modal-dialog > .modal-content {
      background-color: ${props.bg}f5;
      border: none;
      border-radius: 8px;
    }
  `;

  const ModalMenu = styled.ul`
    background-color: transparent;
    border: solid 1px ${props.links};
    border-radius: 8px;
    min-height: 300px;
    padding: 20px;
    margin: 20px;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    &::after {
      content: '';
      transform: rotate(-45deg);
      position: absolute;
      top: 10px;
      left: -25px;
      width: 75px;
      color: ${props.links};
      border-bottom: double 4px;
    }
    li {
      text-align: center;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
      a {
        font-family: 'Viaoda Libre', cursive !important;
        color: ${props.links};
        font-size: 2em;
        font-weight: 500;
        transition: 200ms;
        &:hover {
          letter-spacing: 2px;
        }
      }
    }
  `;

  return (
    <Menu>
      <Circles>
        <svg
          data-bs-toggle="modal"
          data-bs-target="#menuModal"
          xmlns="http://www.w3.org/2000/svg"
          width="165"
          height="47"
          viewBox="0 0 165 47"
        >
          <g id="circlesMenu" transform="translate(-878 -73)">
            <g
              id="Elipse_6"
              data-name="Elipse 6"
              transform="translate(878 75)"
              fill="none"
              stroke={props.four}
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
              stroke={props.four}
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
              stroke={props.four}
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
              stroke={props.four}
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
              fill={props.three}
            />
            <circle
              id="Elipse_11"
              data-name="Elipse 11"
              cx="15"
              cy="15"
              r="15"
              transform="translate(945 90)"
              fill={props.three}
            />
            <circle
              id="Elipse_12"
              data-name="Elipse 12"
              cx="15"
              cy="15"
              r="15"
              transform="translate(990 90)"
              fill={props.three}
            />
            <text
              id="M"
              transform="translate(893 96)"
              fill={props.text}
              font-size="18"
              font-family="Viaoda Libre"
              font-weight="800"
            >
              <tspan x="-8.31" y="0">
                M
              </tspan>
            </text>
            <text
              id="E"
              transform="translate(938 96)"
              fill={props.text}
              font-size="18"
              font-family="Viaoda Libre"
              font-weight="800"
            >
              <tspan x="-5.46" y="0">
                E
              </tspan>
            </text>
            <text
              id="N"
              transform="translate(983 96)"
              fill={props.text}
              font-size="18"
              font-family="Viaoda Libre"
              font-weight="800"
            >
              <tspan x="-7.05" y="0">
                N
              </tspan>
            </text>
            <text
              id="U"
              transform="translate(1028 96)"
              fill={props.text}
              font-size="18"
              font-family="Viaoda Libre"
              font-weight="800"
            >
              <tspan x="-6.8" y="0">
                U
              </tspan>
            </text>
          </g>
        </svg>
      </Circles>
      {/* <!-- Modal --> */}
      <div className="modal fade" id="menuModal" tabindex="-1" aria-labelledby="menuModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <nav className="modal-content">
            <ModalMenu>
              <li>
                <Link to="/">Homepage</Link>
              </li>
              {!window.location.href.includes('contact') && (
                <li>
                  <Link to="/contact/" className="contact">
                    Contact
                  </Link>
                </li>
              )}
              {!window.location.href.includes('about') && (
                <li>
                  <Link to="/about/">About me</Link>
                </li>
              )}
              {!window.location.href.includes('static') && (
                <li>
                  <Link to="/static/">Static arts</Link>
                </li>
              )}
              {!window.location.href.includes('animations') && (
                <li>
                  <Link to="/animations/">Animations</Link>
                </li>
              )}
            </ModalMenu>
          </nav>
        </div>
      </div>
    </Menu>
  );
}
