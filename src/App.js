import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './GlobalStyles';

// import RouteChangeTracker from './RouteChangeTracker';
// import ReactGA from 'react-ga';
// const TRACKING_ID = 'G-6HLR76GTP7';
// ReactGA.initialize(TRACKING_ID);

import ReactGA from 'react-ga';
ReactGA.initialize('G-6HLR76GTP7');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}

export default App;
