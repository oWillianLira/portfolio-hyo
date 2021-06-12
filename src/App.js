import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import history from './Services/history.js';
import './route-animation.css';

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
