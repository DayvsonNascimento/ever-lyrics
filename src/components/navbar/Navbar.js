import { useHistory } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchBar from '../search-bar/SearchBar';

const Navbar = () => {
  const history = useHistory();

  const gotoHomePage = () => {
    history.push('/');
  };

  return (
    <AppBar position='static' style={{ backgroundColor: '#1A649C' }}>
      <Toolbar>
        <Typography
          variant='h6'
          style={{ marginRight: '2rem', cursor: 'pointer' }}
          onClick={gotoHomePage}
        >
          Ever Lyrics
        </Typography>
        <SearchBar />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;