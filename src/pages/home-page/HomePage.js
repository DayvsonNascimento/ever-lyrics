import SearchBar from '../../components/search-bar/SearchBar';
import { Container, Title, MusicNote } from './styles';

const HomePage = () => {
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

export default HomePage;