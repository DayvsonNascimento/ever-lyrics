import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import * as API from '../../services/search-service';

import Media from '../../components/media/Media';
import SongInfo from '../../components/song-info/SongInfo';
import LoadingSpinner from '../../components/loading-spinner/LoadingSpinner';

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
  const [song, setSong] = useState();
  const history = useHistory();

  const loadSongLyrics = async (selectedSongId) => {
    const params = { song_id: selectedSongId };
    const response = await API.getSongLyrics(params);

    setSong(response?.data?.song);
  };

  const showArtistPage = (artist) => {
    const path = '/artist';

    history.push({ pathname: path, state: { artistId: artist.id } });
  };

  useEffect(() => {
    const selectedSongId = history?.location?.state.songId;

    loadSongLyrics(selectedSongId);
  }, [history]);

  return (
    <>
      {song ? (
        <Container>
          <Header>
            <Image src={song.song_art_image_thumbnail_url}></Image>
            <InfoContainer>
              <SongTitle>{song.title_with_featured}</SongTitle>
              <ArtistName onClick={() => showArtistPage(song.primary_artist)}>
                {song.primary_artist?.name}
              </ArtistName>
            </InfoContainer>
          </Header>
          <ContentContainer>
            <Lyrics>{song.lyrics}</Lyrics>
            <SongInfoContainer>
              <Media medias={song.media} />
              <SongInfo
                artist={song.primary_artist}
                album={song.album}
                releaseDate={song.release_date_for_display}
                writers={song.writer_artists}
              />
            </SongInfoContainer>
          </ContentContainer>
        </Container>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default SongLyricsPage;
