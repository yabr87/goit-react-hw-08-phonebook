import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AppHeader = styled.header`
  display: flex;
  border: 1px solid darkgrey;
  padding: 8px;
  background-color: #f8f8f8;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;
export const LogoLink = styled(Link)`
  color: grey;
  display: flex;
  gap: 8px;
  padding: 6px 12px;
`;

export const Logo = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
