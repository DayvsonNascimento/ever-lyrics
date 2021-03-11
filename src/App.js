import HomePage from './pages/home/Home';
import SearchPage from './pages/search-page/SearchPage';
import SongLyricsPage from './pages/song-lyrics-page/SongLyricsPage';

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
          <Route exact path='/results' component={SearchPage}></Route>
          <Route exact path='/lyrics' component={SongLyricsPage}></Route>
          <Route exact path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
