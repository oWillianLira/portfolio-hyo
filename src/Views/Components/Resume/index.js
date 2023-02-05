import React from 'react';
import styled from 'styled-components';

export default function Resume(props) {
  const Resume = styled.a`
    color: ${props.text};
    font-size: 1.6em;
    letter-spacing: 0;
    line-height: 1;
    position: relative;
    top: 10px;
    height: 150px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      color: ${props.text};
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
      border: solid 2px ${props.before};
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
      border: solid 2px ${props.after};
      transform: rotate(15deg);
      margin-left: -8px;
      margin-top: 8px;
      transition: 1000ms ease-in-out;
    }
    @media screen and (max-width: 1440px) {
      height: 125px;
      width: 125px;
    }
    @media screen and (max-width: 1199px) {
      position: absolute;
      top: 50vh;
    }
    @media screen and (max-width: 767px) {
      display: none;
    }
  `;

  const url = 'https://drive.google.com/file/d/18QBIRCX6qRdr4jANSIsOq5prkg3740OU/view?usp=drivesdk';

  return (
    <Resume
      target="_blank"
      title="To know much more about me"
      href="https://drive.google.com/file/d/1PXut8w5ZXxNhXGkmMNMwd4z_G-CMzwuv/view?usp=drivesdk"
    >
      <span>
        Get my <br />
        Resume
      </span>
    </Resume>
  );
}
