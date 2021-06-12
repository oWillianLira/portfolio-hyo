import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Dubai;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: normal;
  outline: none;
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
  background: #555;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #333;
}

@font-face {
  font-family: 'Dubai';
  src: local('Dubai'), url(./Assets/Fonts/Dubai-Regular.ttf) format('truetype');
  font-weight: normal;
}
@font-face {
  font-family: 'Dubai';
  src: local('Dubai'), url(./Assets/Fonts/Dubai-Light.ttf) format('truetype');
  font-weight: 200;
}
@font-face {
  font-family: 'Dubai';
  src: local('Dubai'), url(./Assets/Fonts/Dubai-Medium.ttf) format('truetype');
  font-weight: 400;
}
@font-face {
  font-family: 'Dubai';
  src: local('Dubai'), url(./Assets/Fonts/Dubai-Bold.ttf) format('truetype');
  font-weight: 600;
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

export default GlobalStyle;
