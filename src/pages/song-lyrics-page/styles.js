import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 344px;
  position: relative;
  
  @media (min-width: 480px) {
    max-width: 728px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const Header = styled.div`
  display: flex;
`;

export const InfoContainer = styled.div`
  margin-left: 2rem;
`;

export const SongTitle = styled.h1``;

export const ArtistName = styled.span`
  cursor: pointer;
  font-size: 1.5em;
  font-weight: bold;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
`;

export const ContentContainer = styled.div`
  margin-top: 2rem;
  font-family: Arial, sans-serif;
  color: #444;
  display: flex;

  @media (max-width: 992px) {
    flex-direction: column;
  }
}
`;

export const Lyrics = styled.div`
  white-space: pre-wrap;
  line-height: 1.5;
}
`;

export const SongInfoContainer = styled.div`
  margin-left: auto;
  max-width: 452px;

  @media (max-width: 992px) {
    margin-left: 0px;
    margin-top: 2rem;
  }
}
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border: solid #44444433;
`;