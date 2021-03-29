import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
`;

export const Player = styled.iframe`
  width: 450px;
  height: 280px;
  border: solid #44444433;
  border-width: 1px;
  margin-bottom: 1rem;

  @media (max-width: 992px) {
    width: 342px;
  }

  @media (max-width: 351px) {
    width: 300px;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-top: 0px;
`;

export const ContentContainer = styled.div``;

export const Icon = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 15px;
  cursor: pointer;
`;
