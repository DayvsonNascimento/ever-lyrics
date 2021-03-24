import { useState, useEffect } from 'react';

import { PlayerContainer, Player, Title, Icon } from './styles';

const Media = ({ medias }) => {
  const [media, setMedia] = useState({});

  const getYoutubeUrl = () => media?.youtube?.replace('watch?v=', 'embed/');

  const openLink = (url) => {
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
    <PlayerContainer>
      <Title>Music Video</Title>
      <Player src={getYoutubeUrl()}></Player>
      {Object.keys(media).length > 1 ? (
        <div>
          <Title>Listen also on</Title>
          {media.spotify ? (
            <Icon
              src='/spotify.png'
              onClick={() => openLink(media.spotify)}
            ></Icon>
          ) : (
            ''
          )}
          {media.soundcloud ? (
            <Icon
              src='/soundcloud.png'
              onClick={() => openLink(media.soundcloud)}
            ></Icon>
          ) : (
            ''
          )}
        </div>
      ) : (
        ''
      )}
    </PlayerContainer>
  );
};

export default Media;