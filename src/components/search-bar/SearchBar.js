import { Container, SearchInput, SearchIconWrapper } from './styles';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = () => {
  return (
    <Container>
      <SearchInput placeholder='Search songs and more...' />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </Container>
  );
};

export default SearchBar;