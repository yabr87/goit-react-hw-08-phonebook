import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/authSlelector';

export const useAuth = () => {
  const isLogin = useSelector(isUserLogin);

  return {
    isLogin,
  };
};
