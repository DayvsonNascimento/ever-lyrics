import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import SongCard from '../../components/song-card/SongCard';

import * as API from '../../services/search-service';

import { Container, Title } from './styles.js';

const SearchResultPage = () => {
  const [songs, setSongs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  useEffect(() => {
    const urlParams = new URLSearchParams(history?.location?.search);
    const search = urlParams.get('search');

    setSearchQuery(search);
    loadSearchResults(search);
  }, [history, history.location]);

  const loadSearchResults = async (searchQuery) => {
    const response = await API.getSerchResults({ searchQuery: searchQuery });
    const result_songs = response?.data?.response?.hits.map(
      (song) => song.result
    );

    setSongs(result_songs);
  };

  const handleSongSelection = (song) => {
    const path = '/lyrics';

    history.push({ pathname: path, state: { songId: song.id } });
  };

  return (
    <Container>
      <Title>Top results for "{searchQuery}" </Title>
      {songs.map((song, index) => (
        <SongCard
          key={song?.id || index}
          songInfo={song}
          handleSelection={handleSongSelection}
        />
      ))}
    </Container>
  );
};

export default SearchResultPage;