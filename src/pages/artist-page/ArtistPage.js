import { useState, useEffect } from 'react';

import SongCard from '../../components/song-card/SongCard';
import ArtistInfo from '../../components/artist-info/ArtistInfo';
import LoadingSpinner from '../../components/loading-spinner/LoadingSpinner';

import * as API from '../../services/search-service';

import {
  Container,
  Header,
  ArtistPhoto,
  ArtistName,
  ContentContainer,
  TitleSongs,
  SongsContainer,
} from './styles.js';

const ArtistPage = ({ match }) => {
  const [artist, setArtist] = useState();

  const loadArtistInfo = async (artistId) => {
    const params = { id: artistId };
    const response = await API.getArtistInfo(params);

    console.log(response);
    setArtist(response?.data?.artist);
  };

  useEffect(() => {
    const artistId = match?.params?.id;

    loadArtistInfo(artistId);
  }, [match]);

  return (
    <>
      {artist ? (
        <Container>
          <Header>
            <ArtistPhoto src={artist.image_url}></ArtistPhoto>
            <ArtistName> {artist.name}</ArtistName>
          </Header>
          <ContentContainer>
            <ArtistInfo name={artist.name} description={artist.description} />
            <SongsContainer>
              <TitleSongs>Popular Songs</TitleSongs>
              {artist.top_songs?.hits.map((song, index) => (
                <SongCard
                  key={index}
                  song={song.result}
                  style={{
                    width: '35%',
                    margin: '5px',
                    padding: '0.8rem',
                  }}
                />
              ))}
            </SongsContainer>
          </ContentContainer>
        </Container>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default ArtistPage;