import { useHistory } from 'react-router-dom';

import { Container, Title, Image, SubTitle, CardContent } from './styles';

const SongCard = ({ song, style }) => {
  const history = useHistory();

  const handleSongSelection = () => {
    const path = `/lyrics/${song.id}`;

    history.push(path);
  };

  return (
    <Container onClick={() => handleSongSelection()} style={style}>
      <Image src={song.song_art_image_thumbnail_url} />
      <CardContent>
        <Title>{song.title}</Title>
        <SubTitle>{song.primary_artist?.name}</SubTitle>
      </CardContent>
    </Container>
  );
};

export default SongCard;