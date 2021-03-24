import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Form, SearchInput, SearchButton } from './styles';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = () => {
  const [searchText, setsearchText] = useState('');
  const history = useHistory();

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchText) {
      const searchPath = `/results?search=${searchText}`;

      history.push(searchPath);
    }
  };

  return (
    <Form onSubmit={(e) => handleSearch(e)}>
      <SearchInput
        placeholder='Search songs and more...'
        value={searchText}
        onChange={(e) => setsearchText(e.target.value)}
      />
      <SearchButton type='submit'>
        <SearchIcon />
      </SearchButton>
    </Form>
  );
};

export default SearchBar;