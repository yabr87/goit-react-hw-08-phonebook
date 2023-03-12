import { FaUserCircle } from 'react-icons/fa';
import { NavUserWrapper, UserNaneText } from './NavUser.styles';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'redux/auth/authSlelector';
import Button from 'components/shared/components/Button';
import { fetchLogout } from 'redux/auth/authOperations';

const NavUser = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  return (
    <NavUserWrapper>
      <UserNaneText>
        <FaUserCircle size={30} />
        {email}
      </UserNaneText>
      <Button
        text="logout"
        type="button"
        onBtnClick={() => dispatch(fetchLogout())}
      />
    </NavUserWrapper>
  );
};

export default NavUser;
