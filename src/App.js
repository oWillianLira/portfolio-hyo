import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './GlobalStyles';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

const history = createBrowserHistory();

ReactGA.initialize('G-6HLR76GTP7');
// ReactGA.pageview(window.location.pathname + window.location.search);

// Initialize google analytics page view tracking
history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}

export default App;
