import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './GlobalStyles';

import ReactGA from 'react-ga';
const TRACKING_ID = 'G-6HLR76GTP7';
ReactGA.initialize(TRACKING_ID);
import RouteChangeTracker from './RouteChangeTracker';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}

export default App;
