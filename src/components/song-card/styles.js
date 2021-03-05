import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 1rem;
  width: 350px;
  height: 90px;
  border-radius: 10px;
  margin: 10px;
  background: whitesmoke;
  box-shadow: 0.25rem 0.25rem 0.6rem rgb(0 0 0 / 10%),
    0 0.5rem 1.125rem rgb(75 0 0 / 10%);
  transition: transform 350ms ease;
  cursor: pointer;
  display: flex;

  &:hover {
    transform: scale(1.02) translate(0px, -3px);
  }
`;

export const CardContent = styled.div`
  margin-left: 1rem;
`;

export const Title = styled.div``;

export const SubTitle = styled.div`
  font-size: 0.9rem;
  padding-top: 10px;
`;

export const Image = styled.img`
  max-width: 90px;
`;
