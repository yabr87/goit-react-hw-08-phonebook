import TextInput from 'components/shared/components/TextInput';
import Button from 'components/shared/components/Button';
import { useDispatch } from 'react-redux';
import { fetchSignup } from 'redux/auth/authOperations';

import { RegisterForm, Title, FormWrapper } from './RegisterPage.styles';
import useForm from 'components/shared/hooks/useForm';
import fields from './fields';
import initialState from './initialState';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const onFormSubmit = data => {
    dispatch(fetchSignup(data));
  };

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onFormSubmit,
  });
  const { name, email, password } = state;

  return (
    <RegisterForm onSubmit={handleSubmit}>
      <FormWrapper>
        <Title>Register on Phonebook</Title>
        <TextInput value={name} handleChange={handleChange} {...fields.name} />
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
        <Button text="Register" type="submit" />
      </FormWrapper>
    </RegisterForm>
  );
};

export default RegisterPage;
