import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const FormInput = styled.input`
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid darkgrey;
  outline: none;
  padding: 3px 6px;
  transition: all 0.2s ease;

  &:focus {
    box-shadow: 0 1px darkgray;
  }
`;

export const Inputlabel = styled.label`
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 500;
`;
