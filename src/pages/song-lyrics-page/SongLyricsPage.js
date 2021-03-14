import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import * as API from '../../services/search-service';

import Media from '../../components/media/Media';
import { Container, Image, Header, LyricsContainer, Info } from './styles.js';

const SongLyricsPage = () => {
  const [song, setSong] = useState({});
  const location = useLocation();

  const loadSongLyrics = async (selectedSongId) => {
    const params = { song_id: selectedSongId };
    const response = await API.getSongLyrics(params);

    setSong(response?.data?.song);
  };

  useEffect(() => {
    const selectedSongId = location?.state.songId;

    loadSongLyrics(selectedSongId);
  }, [location]);

  return (
    <Container>
      <Header>
        <Image src={song.song_art_image_thumbnail_url}></Image>
        <Info>
          <h1>{song.title_with_featured}</h1>
          <h2>{song.primary_artist?.name}</h2>
        </Info>
      </Header>

      <LyricsContainer>
        <div>{song.lyrics}</div>

        {song.media ? <Media medias={song.media} /> : null}
      </LyricsContainer>
    </Container>
  );
};

export default SongLyricsPage;