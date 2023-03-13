import styled from 'styled-components';
import { CiSearch } from 'react-icons/ci';

export const FilterLabel = styled.label`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 0 24px;
  margin-bottom: 16px;
`;

export const FilterInput = styled.input`
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid darkgrey;
  outline: none;
  padding: 5px 6px;
  transition: all 0.2s ease;
  width: 100%;

  &:focus {
    box-shadow: darkgrey 0px 1px;
  }
`;
export const Box = styled.div`
  position: relative;
  max-width: 600px;
  flex: 1;
`;

export const SearchIcon = styled(CiSearch)`
  position: absolute;
  color: grey;
  right: 4px;
  top: 2px;
`;
