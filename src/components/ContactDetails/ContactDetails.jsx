//import { Test } from './ContactDetails.styles';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from 'redux/contacts/contactsSelectors';
import Button from 'components/shared/components/Button';
import { fetchDeleteContacts } from 'redux/contacts/contactsOperations';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ContactWrapper,
  Text,
  TextWrapp,
  Photo,
} from './ContactDetails.styles';

import ContactEditForm from 'components/ContactEditForm';

const ContactDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const contacts = useSelector(getAllContacts);

  const onDeleteContact = id => {
    navigate('/contacts');
    dispatch(fetchDeleteContacts(id));
  };

  const { name, number } = contacts.find(contact => contact.id === id);

  return (
    <>
      <Photo src="https://via.placeholder.com/200" alt="user" />
      <ContactWrapper>
        <Text>
          Contact Name: <TextWrapp>{name}</TextWrapp>
        </Text>
        <Text>
          Phone Number: <TextWrapp>{number}</TextWrapp>
        </Text>
      </ContactWrapper>
      <Button
        text="delete"
        type="button"
        onBtnClick={() => onDeleteContact(id)}
      />
      <ContactEditForm id={id} name={name} number={number} />
    </>
  );
};

export default ContactDetails;
