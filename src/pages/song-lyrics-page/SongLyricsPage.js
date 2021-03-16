import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import * as API from '../../services/search-service';

import Media from '../../components/media/Media';
import SongInfo from '../../components/song-info/SongInfo';
import {
  Container,
  Image,
  Header,
  InfoContainer,
  SongTitle,
  ArtistName,
  ContentContainer,
  Lyrics,
  SongInfoContainer,
} from './styles.js';

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
        <InfoContainer>
          <SongTitle>{song.title_with_featured}</SongTitle>
          <ArtistName>{song.primary_artist?.name}</ArtistName>
        </InfoContainer>
      </Header>
      <ContentContainer>
        <Lyrics>{song.lyrics}</Lyrics>
        {song?.media ? (
          <SongInfoContainer>
            <Media medias={song.media} />
            <SongInfo
              artist={song.primary_artist}
              album={song.album}
              releaseDate={song.release_date_for_display}
              writers={song.writer_artists}
            />
          </SongInfoContainer>
        ) : (
          ''
        )}
      </ContentContainer>
    </Container>
  );
};

export default SongLyricsPage;
