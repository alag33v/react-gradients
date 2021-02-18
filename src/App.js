import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Home, New } from './pages';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/new' component={New} />
      </Switch>
    </Router>
  );
};

export default App;
