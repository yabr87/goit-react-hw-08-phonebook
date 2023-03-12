import { NavigationLink } from '../Navigation.styles';

const NavAuth = () => {
  return (
    <>
      <NavigationLink to="/register">register</NavigationLink>
      <NavigationLink to="/login">login</NavigationLink>
    </>
  );
};

export default NavAuth;
