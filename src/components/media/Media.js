import { useState, useEffect } from 'react';

import { Container, Player, Title, ContentContainer, Icon } from './styles';

const Media = ({ medias }) => {
  const [media, setMedia] = useState({});

  const getYoutubeUrl = () => media?.youtube?.replace('watch?v=', 'embed/');

  const openExternalLink = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  useEffect(() => {
    const mediasObj = medias?.reduce(
      (acc, media) => ({ ...acc, [media.provider]: media.url }),
      {}
    );
    setMedia(mediasObj);
  }, [medias]);

  return (
    <Container>
      <Title>Music Video</Title>
      <Player src={getYoutubeUrl()}></Player>
      <ContentContainer
        style={{ display: Object.keys(media).length > 1 ? 'block' : 'none' }}
      >
        <Title>Listen also on</Title>
        <Icon
          src='/spotify.png'
          onClick={() => openExternalLink(media.spotify)}
          style={{ display: media.spotify ? 'inline-block' : 'none' }}
        ></Icon>
        <Icon
          src='/soundcloud.png'
          onClick={() => openExternalLink(media.soundcloud)}
          style={{ display: media.soundcloud ? 'inline-block' : 'none' }}
        ></Icon>
      </ContentContainer>
    </Container>
  );
};

export default Media;