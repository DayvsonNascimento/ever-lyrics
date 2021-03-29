import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 1.5rem;
  background-color: white;
  position: relative;
  max-width: 300px;
  margin: 0 auto;

  @media (min-width: 550px) {
    max-width: 480px;
    margin: 5px;
  }
  
  @media (min-width: 743px) {
    max-width: 665px;
  }
  @media (min-width: 856px) {
    max-width: 960px;
  }
}
`;

export const ArtistDescription = styled.div`
  white-space: pre-wrap;
  line-height: 1.5;
}
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-top: 0;
`;

export const ReadMore = styled.span`
  color: #1a649c;
  cursor: pointer;
  display: ${(props) => (props.showFullDescription ? 'none' : 'block')};
`;