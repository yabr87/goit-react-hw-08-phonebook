import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 8px;
  padding: 6px 12px;
`;

export const NavigationLink = styled(NavLink)`
  box-sizing: border-box;
  color: gray;
  /* height: 21px; */
  font-weight: 500;
  font-family: inherit;
  font-size: 16px;
  background-color: white;
  text-transform: uppercase;
  border-radius: 5px;
  border: 1px solid darkgray;
  outline: none;
  line-height: 1;
  padding: 3px 8px;
  transition: all 0.2s ease;
  box-shadow: 0 2px darkgray;

  &:hover {
    box-shadow: 0 1px darkgray;
    transform: translateY(2px);
  }

  &.active {
    color: white;
    background-color: darkgray;
    box-shadow: 0 2px grey;
    &:hover {
      box-shadow: 0 1px dimgrey;
    }
  }
`;
