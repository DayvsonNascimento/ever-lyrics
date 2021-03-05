import { useState } from 'react';

import { Form, SearchInput, SearchButton } from './styles';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = () => {
  const [searchText, setsearchText] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchText);
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
