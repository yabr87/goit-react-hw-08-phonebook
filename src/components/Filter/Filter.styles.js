import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 0 24px;
`;

export const FilterInput = styled.input`
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid darkgrey;
  outline: none;
  padding: 5px 6px;
  transition: all 0.2s ease;
  width: 100%;
  max-width: 600px;

  &:focus {
    box-shadow: 0 1px darkgray;
  }
`;
