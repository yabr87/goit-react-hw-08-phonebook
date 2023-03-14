import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from 'components/shared/components/Button';
import TextInput from 'components/shared/components/TextInput';
import fields from './fields';

import { formatUserTel } from 'components/utils/addContactsUtils';
import { fetchEditContacts } from 'redux/contacts/contactsOperations';

import { EditForm, BtnBox } from './ContactEditForm.styles';

const ContactEditForm = ({ id, name, number, setState }) => {
  const dispatch = useDispatch();
  const [state, setstate] = useState({ name, number });

  const onInputChange = ({ target: { name, value } }) => {
    return setstate(prevState => ({ ...prevState, [name]: value }));
  };

  const onFormSabmit = e => {
    e.preventDefault();
    const name = state.name.toLowerCase();
    const number = formatUserTel(state.number.split('-').join(''));

    dispatch(fetchEditContacts({ id, name, number }));

    e.currentTarget.reset();
    setState(false);
  };

  return (
    <EditForm autoComplete="off" onSubmit={onFormSabmit}>
      <TextInput
        value={state.name}
        handleChange={onInputChange}
        {...fields.name}
      />
      <TextInput
        value={state.number.split('-').join('')}
        handleChange={onInputChange}
        pattern="\d*"
        {...fields.number}
      />
      <BtnBox>
        <Button text="Edit Contact" type="submit" />
        <Button
          text="cancel"
          type="button"
          onBtnClick={() => setState(false)}
        />
      </BtnBox>
    </EditForm>
  );
};

ContactEditForm.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  setState: PropTypes.func,
};

export default ContactEditForm;
