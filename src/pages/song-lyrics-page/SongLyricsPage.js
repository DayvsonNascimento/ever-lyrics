import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import * as API from '../../services/search-service';

import { Container, LyricsContainer } from './styles.js';

const SongLyricsPage = () => {
  const [song, setSong] = useState({});
  const history = useHistory();

  const loadSongLyrics = async (selectedSong) => {
    const params = { song_id: selectedSong.id };
    const response = await API.getSongLyrics(params);

    setSong(response?.data?.song);
  };

  useEffect(() => {
    const selectedSong = history.location.state.song;

    loadSongLyrics(selectedSong);
  }, [history]);

  return (
    <Container>
      <LyricsContainer>{song.lyrics}</LyricsContainer>
    </Container>
  );
};

export default SongLyricsPage;