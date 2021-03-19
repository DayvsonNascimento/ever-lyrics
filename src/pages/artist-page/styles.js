import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
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

export const ArtistPhoto = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const ArtistName = styled.h1`
  margin-left: 2rem;
`;

export const ContentContainer = styled.div`
  font-family: Arial, sans-serif;
  color: #444;
  display: flex;
}
`;

export const DiscriptionContainer = styled.div`
  width: 100%;
  min-width: 500px;
}
`;

export const ArtistInfo = styled.div`
  white-space: pre-wrap;
  line-height: 1.5;
}
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-top: 2rem;
`;

export const TitleSongs = styled(Title)`
  width: 100%;
  margin-left: 4rem;
`;

export const SongsContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
`;