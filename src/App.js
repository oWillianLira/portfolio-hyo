import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}

export default App;
