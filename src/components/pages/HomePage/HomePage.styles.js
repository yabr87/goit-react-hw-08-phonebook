import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  color: gray;
  margin-bottom: 30px;
`;

export const Wrapper = styled.form`
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

export const BtnWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  text-align: center;
  text-transform: uppercase;
  color: gray;
  margin-bottom: 30px;
`;
