import HomePage from './pages/home/Home';
import SearchResultPage from './pages/search-results/SearchResult';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/results' component={SearchResultPage}></Route>
          <Route exact path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
