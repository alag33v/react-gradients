import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Home, New, Edit } from './pages';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path='/react-gradients' component={Home} />
        <Route path='/new' component={New} />
        <Route path='/edit/:id' component={Edit} />
      </Switch>
    </Router>
  );
};

export default App;
