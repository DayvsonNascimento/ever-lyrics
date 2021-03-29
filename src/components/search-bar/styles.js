import styled from 'styled-components';

export const Form = styled.form`
  width: 25%;
  min-width: 210px;
  position: relative;
`;

export const SearchInput = styled.input`
  height: 28px;
  border-radius: 30px;
  background-color: white;
  border: none;
  margin: 5px 0;
  font-size: 16px;
  width: 100%;
  text-align: center;
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 0.5vw;
  top: 0.5rem;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;
