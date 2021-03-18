import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import SongCard from '../../components/song-card/SongCard';

import * as API from '../../services/search-service';

import {
  Container,
  Header,
  ArtistPhoto,
  ArtistName,
  ContentContainer,
  ArtistInfo,
  Title,
  SongsContainer,
} from './styles.js';

const ArtistPage = () => {
  const [artist, setArtist] = useState({});

  const location = useLocation();

  const loadArtistInfo = async (artistId) => {
    const params = { id: artistId };
    const response = await API.getArtistInfo(params);

    console.log(response);
    setArtist(response?.data?.artist);
  };

  useEffect(() => {
    const artistId = location?.state.artistId;

    loadArtistInfo(artistId);
  }, [location]);

  return (
    <Container>
      <Header>
        <ArtistPhoto src={artist.image_url}></ArtistPhoto>
        <ArtistName> {artist.name}</ArtistName>
      </Header>
      <Title>About {artist.name}</Title>
      <ContentContainer>
        <ArtistInfo>{artist.description?.plain}</ArtistInfo>
        <SongsContainer>
          {artist.top_songs?.hits.map((song, index) => (
            <SongCard
              key={index}
              songInfo={song.result}
              style={{ width: '35%', margin: '5px', padding: '0.8rem' }}
              // handleSelection={handleSongSelection}
            />
          ))}
        </SongsContainer>
      </ContentContainer>
    </Container>
  );
};

export default ArtistPage;
