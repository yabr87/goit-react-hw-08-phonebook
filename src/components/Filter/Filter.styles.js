import styled from 'styled-components';

export const FilterLabel = styled.label`
  width: 50%;
`;

export const FilterInput = styled.input`
  border-radius: 5px;
  border: 1px solid darkgrey;
  outline: none;
  padding: 5px 6px;
  transition: all 0.2s ease;
  width: 100%;

  &:focus {
    box-shadow: 0 1px darkgray;
  }
`;
