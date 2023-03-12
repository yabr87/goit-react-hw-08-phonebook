import { FaPhoneSquareAlt } from 'react-icons/fa';
import { AppHeader, Logo, LogoLink, NavBar } from './Header.styles';
import { Container } from 'components/App/App.styles';
import Filter from '../Filter';
import Navigation from 'components/Navigation';

const Header = () => {
  return (
    <AppHeader>
      <Container>
        <NavBar>
          <LogoLink to="/">
            <FaPhoneSquareAlt size={30} />
            <Logo>Phonebook</Logo>
          </LogoLink>
          <Filter />
          <Navigation />
        </NavBar>
      </Container>
    </AppHeader>
  );
};

export default Header;
