//import { Test } from './ContactDetails.styles';
import { useSelector } from 'react-redux';
import { getAllContacts } from 'redux/contacts/contactsSelectors';

import { useParams } from 'react-router-dom';

const ContactDetails = () => {
  const { id } = useParams();
  const contacts = useSelector(getAllContacts);

  const { name, number } = contacts.find(contact => contact.id === id);

  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{number}</p>
    </div>
  );
};

export default ContactDetails;
