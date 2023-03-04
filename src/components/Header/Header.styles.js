import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AppHeader = styled.header`
  display: flex;
  border: 1px solid darkgrey;
  box-shadow: 0 2px darkgray;
  padding: 8px;
`;
export const LogoLink = styled(Link)`
  display: flex;
  gap: 8px;
`;

export const Logo = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.5;
  text-transform: uppercase;
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
