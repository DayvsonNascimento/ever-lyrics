import HomePage from './pages/home-page/HomePage';
import SearchPage from './pages/search-page/SearchPage';
import SongLyricsPage from './pages/song-lyrics-page/SongLyricsPage';
import ArtistPage from './pages/artist-page/ArtistPage';

import Navbar from './components/navbar/Navbar';

import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

const Routes = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <Navbar />}
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/results' component={SearchPage}></Route>
        <Route exact path='/lyrics/:id' component={SongLyricsPage}></Route>
        <Route exact path='/artist/:id' component={ArtistPage}></Route>
        <Route exact path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;