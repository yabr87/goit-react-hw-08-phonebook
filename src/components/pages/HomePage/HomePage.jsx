import { useNavigate } from 'react-router-dom';
import Button from 'components/shared/components/Button';

import { Wrapper, Title, BtnWrapper, Text } from './HomePage.styles';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>Welcome to the Phonebook!</Title>
      <Text>Please register or login</Text>
      <BtnWrapper>
        <Button
          text="Register"
          type="button"
          onBtnClick={() => navigate('/register')}
        />
        <Button
          text="Login"
          type="button"
          onBtnClick={() => navigate('/login')}
        />
      </BtnWrapper>
    </Wrapper>
  );
};

export default HomePage;
