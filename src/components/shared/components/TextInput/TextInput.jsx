import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { FormInput, Inputlabel, InputWrapper } from './TextInput.styles';

const TextInput = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(6), []);

  return (
    <InputWrapper>
      <Inputlabel htmlFor={id}>{label}</Inputlabel>
      <FormInput id={id} onChange={handleChange} {...props} />
    </InputWrapper>
  );
};

TextInput.propTypes = {
  // handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default TextInput;
