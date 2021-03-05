import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1A649C;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

export const Title = styled.h1`
  color: white;
  display: inline-flex;
  padding-left: 4.0rem;;
`;

export const MusicNote = styled.div`
  top: 60px;
  left: 0;
  animation: notes 3s infinite linear;
  font-size: 35px;
  opacity: 0;
  @keyframes notes {
    0% {
      transform: scale(1) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
      transform: scale(1.5) translate(50%, -50%);
    }
    80% {
      opacity: 0;
      transform: scale(1.5) translate(100%, -100%);
    }
    100% {
      transform: scale(1.5) translate(100%, -100%);
      opacity: 0;
    }
`;
