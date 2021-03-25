import { useState, useEffect } from 'react';

import { Container, Player, Title, ContentContainer, Icon } from './styles';

const Media = ({ medias }) => {
  const [media, setMedia] = useState({});

  const getYoutubeURL = () => {
    let url = media?.youtube?.replace('watch?v=', 'embed/');
    url = url?.replace('http', 'https');

    return url;
  };

  const openExternalURL = (url) => {
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
      <Player src={getYoutubeURL()}></Player>
      <ContentContainer
        style={{ display: Object.keys(media).length > 1 ? 'block' : 'none' }}
      >
        <Title>Listen also on</Title>
        <Icon
          src={process.env.PUBLIC_URL + '/spotify.png'}
          onClick={() => openExternalURL(media.spotify)}
          style={{ display: media.spotify ? 'inline-block' : 'none' }}
        ></Icon>
        <Icon
          src={process.env.PUBLIC_URL + '/soundcloud.png'}
          onClick={() => openExternalURL(media.soundcloud)}
          style={{ display: media.soundcloud ? 'inline-block' : 'none' }}
        ></Icon>
      </ContentContainer>
    </Container>
  );
};

export default Media;