import styled from 'styled-components';

export const Container = styled.div`
  width: 25%;
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

export const SearchIconWrapper = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  cursor: pointer;
`;
