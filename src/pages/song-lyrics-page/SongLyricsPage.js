import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import * as API from '../../services/search-service';

import { Container, Image, Header, LyricsContainer, Info } from './styles.js';

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
      <Header>
        <Image src={song.song_art_image_thumbnail_url}></Image>
        <Info>
          <h1>{song.title_with_featured}</h1>
          <h2>{song.primary_artist?.name}</h2>
        </Info>
      </Header>
      <LyricsContainer>{song.lyrics}</LyricsContainer>
    </Container>
  );
};

export default SongLyricsPage;