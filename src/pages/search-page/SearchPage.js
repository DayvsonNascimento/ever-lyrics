import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import SongCard from '../../components/song-card/SongCard';
import * as API from '../../services/search-service';
import { Container, Title } from './styles.js';

const SearchResultPage = () => {
  const [songs, setSongs] = useState([
    {
      songName: 'Rooster',
      artist: 'Alice in Chains',
      thumbnail:
        'https://images.genius.com/f3b9864dd2e715fc775eea7e185a9037.300x300x1.jpg',
    },
    {
      songName: 'Desintegration',
      artist: 'The Cure',
      thumbnail: '',
    },
  ]);
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(history?.location?.search);
    const search = urlParams.get('search');

    setSearchQuery(search);
    loadSearchResults(search);
  }, [history]);

  const loadSearchResults = async (searchQuery) => {
    const response = await API.getSerchResults({ searchQuery: searchQuery });
    const result_songs = response?.data?.response?.hits.map(
      (song) => song.result
    );

    setSongs(result_songs);
  };

  const handleSongSelection = (song) => {
    console.log(song);
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
