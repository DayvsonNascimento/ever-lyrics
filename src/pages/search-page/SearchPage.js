import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import SongCard from '../../components/song-card/SongCard';
import * as API from '../../services/search-service';

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

  useEffect(() => {
    const urlParams = new URLSearchParams(history?.location?.search);
    const searchQuery = urlParams.get('search');

    loadSearchResults(searchQuery);
  }, [history]);

  const loadSearchResults = async (searchQuery) => {
    const response = await API.getSerchResults({ searchQuery: searchQuery });
    const result_songs = response?.data?.response?.hits.map(
      (song) => song.result
    );
    console.log('called')
    setSongs(result_songs);
  };
  return (
    <div>
      {songs.map((song, index) => (
        <SongCard key={song?.id || index} songInfo={song} />
      ))}
    </div>
  );
};

export default SearchResultPage;
