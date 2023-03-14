//import { Test } from './ContactDetails.styles';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from 'redux/contacts/contactsSelectors';
import Button from 'components/shared/components/Button';
import { fetchDeleteContacts } from 'redux/contacts/contactsOperations';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

import {
  ContactWrapper,
  Text,
  TextWrapp,
  Photo,
  BtnBox,
} from './ContactDetails.styles';

import ContactEditForm from 'components/ContactEditForm';

const ContactDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const contacts = useSelector(getAllContacts);

  const [state, setState] = useState(false);

  useEffect(() => {
    setState(false);
  }, [id]);

  const onDeleteContact = id => {
    navigate('/contacts');
    dispatch(fetchDeleteContacts(id));
  };

  const contact =
    contacts && contacts.length > 0
      ? contacts.find(contact => contact.id === id)
      : null;
  const { name, number } = contact || {};

  return (
    <>
      {contacts && (
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
          {!state && (
            <BtnBox>
              <Button
                text="delete"
                type="button"
                onBtnClick={() => onDeleteContact(id)}
              />
              <Button
                text="Edit"
                type="button"
                onBtnClick={() => setState(true)}
              />
            </BtnBox>
          )}
          {state && (
            <ContactEditForm
              id={id}
              name={name}
              number={number}
              setState={setState}
            />
          )}
        </>
      )}
    </>
  );
};

export default ContactDetails;
