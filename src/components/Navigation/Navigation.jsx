import { Nav, NavigationLink } from './Navigation.styles';
import { useSelector } from 'react-redux';
import NavAuth from './NavAuth';
import NavUser from './NavUser';
import { isUserLogin } from 'redux/auth/authSlelector';

const Navigation = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <Nav>
      {!isLogin && <NavAuth />}
      {isLogin && <NavUser />}
    </Nav>
  );
};

export default Navigation;
