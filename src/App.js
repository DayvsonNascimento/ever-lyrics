import HomePage from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
        <HomePage />
      </Router>
    </div>
  );
}

export default App;
