// import PropTypes from 'prop-types';
// import { useAuth } from 'components/shared/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/authSlelector';

export const PrivateRoute = ({ component: Component, redirectTo }) => {
  // const { isLogin } = useAuth();

  const isLogin = useSelector(isUserLogin);
  console.log(Component);
  console.log(redirectTo);
  return !isLogin ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
  // bla: PropTypes.string,
};

export default PrivateRoute;
