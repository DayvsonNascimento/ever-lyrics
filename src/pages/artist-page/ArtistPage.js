import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import SongCard from '../../components/song-card/SongCard';
import ArtistInfo from '../../components/artist-info/ArtistInfo';

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

const ArtistPage = () => {
  const [artist, setArtist] = useState({});

  const history = useHistory();

  const loadArtistInfo = async (artistId) => {
    const params = { id: artistId };
    const response = await API.getArtistInfo(params);

    console.log(response);
    setArtist(response?.data?.artist);
  };

  const handleSongSelection = (song) => {
    const path = '/lyrics';

    history.push({ pathname: path, state: { songId: song.id } });
  };

  useEffect(() => {
    const artistId = history?.location?.state.artistId;

    loadArtistInfo(artistId);
  }, [history]);

  return (
    <Container>
      <Header>
        <ArtistPhoto src={artist.image_url}></ArtistPhoto>
        <ArtistName> {artist.name}</ArtistName>
      </Header>
      <ContentContainer>
        <ArtistInfo
          name={artist.name}
          description={artist.description}
        />
        <SongsContainer>
          <TitleSongs>Popular Songs</TitleSongs>
          {artist.top_songs?.hits.map((song, index) => (
            <SongCard
              key={index}
              songInfo={song.result}
              style={{
                width: '35%',
                margin: '5px',
                padding: '0.8rem',
              }}
              handleSelection={handleSongSelection}
            />
          ))}
        </SongsContainer>
      </ContentContainer>
    </Container>
  );
};

export default ArtistPage;