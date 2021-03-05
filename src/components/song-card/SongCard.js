import { CardContainer, Title, Image, SubTitle, CardContent } from './styles';

const SongCard = () => {
  return (
    <CardContainer>
      <Image src='https://images.genius.com/f3b9864dd2e715fc775eea7e185a9037.300x300x1.jpg' />
      <CardContent>
        <Title>Rooster</Title>
        <SubTitle>Alice in Chains</SubTitle>
      </CardContent>
    </CardContainer>
  );
};

export default SongCard;
