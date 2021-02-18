import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Home, New, Edit } from './pages';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/new' component={New} />
        <Route exact path='/edit/:id' component={Edit} />
      </Switch>
    </Router>
  );
};

export default App;
