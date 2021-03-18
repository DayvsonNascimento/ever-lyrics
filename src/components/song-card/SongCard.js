import { CardContainer, Title, Image, SubTitle, CardContent } from './styles';

const SongCard = ({ songInfo, handleSelection, style }) => {
  return (
    <CardContainer onClick={() => handleSelection(songInfo)} style={style}>
      <Image src={songInfo.song_art_image_thumbnail_url} />
      <CardContent>
        <Title>{songInfo.title}</Title>
        <SubTitle>{songInfo.primary_artist?.name}</SubTitle>
      </CardContent>
    </CardContainer>
  );
};

export default SongCard;
