import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContactItem = styled.li`
  margin-bottom: 10px;

  animation-duration: 1s;
  animation-name: addContact;
`;

export const Tel = styled.span`
  margin-right: 10px;
`;

export const ContactLink = styled(NavLink)`
  text-transform: capitalize;
  padding: 3px 4px;
  border-radius: 5px;
  border-bottom: 1px dashed darkgrey;
  display: grid;
  grid-template: 'a b c' / 1.8fr 1.2fr 0.7fr;
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
