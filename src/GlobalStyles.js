import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

main.page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.fade-appear, .fade-enter {
  opacity: 0;
  z-index: 1;
}

.fade-appear-active, .fade-enter.fade-enter-active {
  opacity: 1;
  transition: 500ms ease-in-out;
}

.fade-exit {
  opacity: 1;
}

.fade-exit.fade-exit-active {
  opacity: 0;
  transition: 500ms ease-in-out;
}

@font-face {
  font-family: 'Dubai';
  font-weight: normal;
  src: local('Dubai'), url('./Assets/Fonts/Dubai-Regular.ttf') format('truetype');
}
@font-face {
  font-family: 'Dubai';
  font-weight: 200;
  src: local('Dubai'), url('./Assets/Fonts/Dubai-Light.ttf') format('truetype');
}
@font-face {
  font-family: 'Dubai';
  font-weight: 400;
  src: local('Dubai'), url('./Assets/Fonts/Dubai-Medium.ttf') format('truetype');
}
@font-face {
  font-family: 'Dubai';
  font-weight: 600;
  src: local('Dubai'), url('./Assets/Fonts/Dubai-Bold.ttf') format('truetype');
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Dubai', Segoe UI;
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: normal;
  outline: none;

  @media screen and ( min-width: 1600px ){
    font-size: 18px;
  }
  @media screen and ( max-width: 991px ) {
    font-size: 13px;
  }
  @media screen and ( max-width: 767px ) {
    font-size: 11px;
  }
}

.container {
  @media (min-width: 1600px) {
    max-width: 1500px;
  }
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #ddd;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #3A4D5C;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #333;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
}

h1 { font-size: 3.5em; }
h2 { font-size: 3em; }
h3 { font-size: 2.5em; }
h4 { font-size: 2em; }

span { font-size: .9em; }

`;

export const colors = {
  blue1: '#5A86A9',
  blue2: '#3A4D5C',
  blue3: '#212032',
  brown1: '#D1B9A1',
  brown2: '#C45030',
};

export const view = {
  max_h: '1366px',
};

export default GlobalStyle;
