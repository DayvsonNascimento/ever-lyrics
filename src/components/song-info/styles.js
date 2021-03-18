import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 20px;
  margin-top: 1rem;
`;

export const Container = styled.div`
  margin-top: 1rem;
  border-top: 1px solid rgb(0 0 0 / 50%);
`;

export const InfoContainer = styled.div`
  line-height: 1.5;
`;

export const Label = styled.div`
  font-size: 17px;
  font-weight: bolder;
  display: block;
`;
export const Text = styled.span`
  font-size: 16px;
  font-weight: normal;
`;

export const ArtistName = styled(Text)`
    cursor: pointer;
    color: #1A649C;
`