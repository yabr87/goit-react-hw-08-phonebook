import { useDispatch, useSelector } from 'react-redux';
import TextInput from 'components/shared/components/TextInput';
import fields from './fields';

import Button from 'components/shared/components/Button';
import { AddForm } from './ContactForm.styles';

import {
  checkNameInPhonebook,
  formatUserTel,
} from 'components/utils/addContactsUtils';
import { getAllContacts } from 'redux/contacts/contactsSelectors';
import { fetchAddContacts } from 'redux/contacts/contactsOperations';

const ContactForm = () => {
  const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

  const onFormSabmit = e => {
    e.preventDefault();
    const name = e.currentTarget.name.value.toLowerCase();
    const number = formatUserTel(e.currentTarget.number.value);

    if (checkNameInPhonebook(name, contacts)) return;

    dispatch(fetchAddContacts({ name, number }));

    e.currentTarget.reset();
  };

  return (
    <AddForm autoComplete="off" onSubmit={onFormSabmit}>
      <TextInput {...fields.name} />
      <TextInput pattern="\d*" {...fields.number} />
      <Button text="Add contact" type="submit" />
    </AddForm>
  );
};

export default ContactForm;
