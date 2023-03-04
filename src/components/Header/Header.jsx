import { FaPhoneSquareAlt } from 'react-icons/fa';
import { AppHeader, Logo, LogoLink, NavBar } from './Header.styles';
import { Container } from 'components/App/App.styles';
import Filter from '../Filter';

const Header = () => {
  return (
    <AppHeader>
      <Container>
        <NavBar>
          <LogoLink to="/">
            <FaPhoneSquareAlt size={24} />
            <Logo>Phonebook</Logo>
          </LogoLink>
          <Filter />
        </NavBar>
      </Container>
    </AppHeader>
  );
};

export default Header;
