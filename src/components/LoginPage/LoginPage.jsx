import useForm from 'components/shared/hooks/useForm';
import TextInput from 'components/shared/components/TextInput';
// import { Navigate } from 'react-router-dom';
import { LoginForm, FormWrapper, Title } from './LoginPage.styles';
import Button from 'components/shared/components/Button';
import initialState from './initialState';
import fields from './fields';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from 'redux/auth/authOperations';
// import { isUserLogin } from 'redux/auth/authSlelector';

const LoginPage = () => {
  // const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();
  const onFormSubmit = data => {
    dispatch(fetchLogin(data));
  };

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onFormSubmit,
  });
  const { email, password } = state;

  // if (isLogin) {
  //   return <Navigate to="/contacts" />;
  // }

  return (
    <LoginForm onSubmit={handleSubmit}>
      <FormWrapper>
        <Title>Login on Phonebook</Title>
        <TextInput
          value={email}
          handleChange={handleChange}
          {...fields.email}
        />
        <TextInput
          value={password}
          handleChange={handleChange}
          {...fields.password}
        />
        <Button text="Login" type="submit" />
      </FormWrapper>
    </LoginForm>
  );
};

export default LoginPage;
