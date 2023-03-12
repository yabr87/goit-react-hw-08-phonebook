import styled from 'styled-components';

export const LoginForm = styled.form`
  border: 1px solid darkgrey;
  border-radius: 5px;
  padding: 50px;
  width: 540px;

  position: relative;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: gray;
  margin-bottom: 30px;
`;
