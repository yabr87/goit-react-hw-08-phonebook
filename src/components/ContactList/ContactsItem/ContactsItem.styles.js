import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContactItem = styled.li`
  margin-bottom: 10px;

  animation-duration: 1s;
  animation-name: addContact;
`;

export const Tel = styled.span`
  /* margin-right: 10px; */
`;

export const ContactLink = styled(NavLink)`
  text-transform: capitalize;
  padding: 3px 4px;
  border-radius: 5px;
  border-bottom: 1px dashed darkgrey;
  display: grid;
  gap: 16px;
  grid-template: 'a b' / 1.6fr 0.64fr;
  &:hover {
    background-color: darkgrey;
  }
  &.active {
    background-color: darkgrey;
    &:hover {
      background-color: grey;
    }
  }
`;
