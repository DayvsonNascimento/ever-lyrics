import HomePage from './pages/home-page/HomePage';
import SearchPage from './pages/search-page/SearchPage';
import SongLyricsPage from './pages/song-lyrics-page/SongLyricsPage';
import ArtistPage from './pages/artist-page/ArtistPage';

import Navbar from './components/navbar/Navbar';

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
          <>
            <Navbar />
            <Route exact path='/results' component={SearchPage}></Route>
            <Route exact path='/lyrics/:id' component={SongLyricsPage}></Route>
            <Route exact path='/artist/:id' component={ArtistPage}></Route>
          </>
          <Route exact path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
