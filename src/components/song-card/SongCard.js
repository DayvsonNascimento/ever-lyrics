import { CardContainer, Title, Image, SubTitle, CardContent } from './styles';

const SongCard = ({ SongInfo }) => {
  return (
    <CardContainer>
      <Image src={SongInfo.thumbnail} />
      <CardContent>
        <Title>{SongInfo.songName}</Title>
        <SubTitle>{SongInfo.artist}</SubTitle>
      </CardContent>
    </CardContainer>
  );
};

export default SongCard;
