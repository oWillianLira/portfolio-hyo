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

  @media screen and ( min-width: 1600px ){
    font-size: 20px;
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

.view {
  width: 100%;
  min-height: 100vh;
  padding: 25px 0 0;
  background: transparent radial-gradient(40% 40% at 25% 50%, #44769e 0%, #3a4d5c 100%) 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  .container {
    flex: 1;
    display: flex;
    flex-direction: column;
    .row {
      flex: 1;
    }
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