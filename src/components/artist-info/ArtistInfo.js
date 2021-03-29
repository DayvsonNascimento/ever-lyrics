import { useState, useEffect } from 'react';

import { Container, Title, ArtistDescription, ReadMore } from './styles';

const MAX_LENTGH = 800;

const ArtistInfo = ({ name, description }) => {
  const [descriptionText, setdescriptionText] = useState('');
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    let text = description?.plain;

    if (text?.length > MAX_LENTGH && !showFullDescription) {
      text = text.substring(0, MAX_LENTGH) + '... ';
    }

    setdescriptionText(text);
  }, [description, showFullDescription]);

  const toggleFullDescription = () => {
    setShowFullDescription(true);
  };

  return (
    <Container>
      <Title>{`About ${name}`}</Title>
      {description?.plain?.length > MAX_LENTGH ? (
        <ArtistDescription>
          {descriptionText}
          <ReadMore
            onClick={() => toggleFullDescription()}
            showFullDescription={showFullDescription}
          >
            read more
          </ReadMore>
        </ArtistDescription>
      ) : (
        <ArtistDescription>{description?.plain}</ArtistDescription>
      )}
    </Container>
  );
};

export default ArtistInfo;