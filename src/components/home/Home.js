import SearchBar from '../search-bar/SearchBar';
import { Container, Title, MusicNote } from './styles';

const Home = () => {
  return (
    <Container>
      <Title>
        EverLyrics
        <MusicNote>&#9835; &#9833;</MusicNote>
      </Title>
      <SearchBar />
    </Container>
  );
};

export default Home;