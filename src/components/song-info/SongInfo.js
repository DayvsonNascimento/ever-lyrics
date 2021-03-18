import { useHistory } from 'react-router-dom';
import {
  Container,
  Title,
  InfoContainer,
  Label,
  ArtistName,
  Text,
} from './styles';

const SongInfo = ({ artist, album, releaseDate, writers }) => {
  const history = useHistory();

  const formatWriters = () => {
    let writersNames = writers.map((writer) => writer.name);

    writersNames = writersNames.join(', ');

    return writersNames;
  };

  const showArtistPage = (artist) => {
    const path = '/artist';

    history.push({ pathname: path, state: { artistId: artist.id } });
  };

  return (
    <Container>
      <Title>Song Info</Title>
      <InfoContainer>
        <Label>
          Artist:
          <ArtistName onClick={() => showArtistPage(artist)}>
            {artist.name}
          </ArtistName>
        </Label>
        <Label>
          Album:
          <Text> {album?.name}</Text>
        </Label>
        <Label>
          Release Date:
          <Text> {releaseDate}</Text>
        </Label>
        <Label>
          Writers:
          <Text> {formatWriters()}</Text>
        </Label>
      </InfoContainer>
    </Container>
  );
};

export default SongInfo;