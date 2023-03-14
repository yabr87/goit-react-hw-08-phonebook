import { useDispatch, useSelector } from 'react-redux';
import TextInput from 'components/shared/components/TextInput';
import fields from './fields';

import Button from 'components/shared/components/Button';
import { EditForm } from './ContactEditForm.styles';

import { formatUserTel } from 'components/utils/addContactsUtils';
import { fetchEditContacts } from 'redux/contacts/contactsOperations';

const ContactEditForm = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onFormSabmit = e => {
    e.preventDefault();
    const name = e.currentTarget.name.value.toLowerCase();
    const number = formatUserTel(e.currentTarget.number.value);

    dispatch(fetchEditContacts({ id, name, number }));

    e.currentTarget.reset();
  };

  return (
    <EditForm autoComplete="off" onSubmit={onFormSabmit}>
      <TextInput value={name} {...fields.name} />
      <TextInput value={number} pattern="\d*" {...fields.number} />
      <Button text="Edit Contact" type="submit" />
    </EditForm>
  );
};

export default ContactEditForm;
