import { Container, Title, Label, Text } from './styles';

const SongInfo = ({ artist, album, releaseDate, writers }) => {
  const formatWriters = () => {
    let writersNames = writers.map((writer) => writer.name);

    writersNames = writersNames.join(', ');

    return writersNames;
  };

  return (
    <Container>
      <Title>Song Info</Title>
      <Label>
        Artist:
        <Text> {artist.name}</Text>
      </Label>
      <Label>
        Album:
        <Text> {album.name}</Text>
      </Label>
      <Label>
        Release Date:
        <Text> {releaseDate}</Text>
      </Label>
      <Label>
        Writers:
        <Text> {formatWriters()}</Text>
      </Label>
    </Container>
  );
};

export default SongInfo;