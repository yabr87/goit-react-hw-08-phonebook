import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from 'redux/contacts/contactsSelectors';
import {
  fetchAllContacts,
  fetchDeleteContacts,
} from 'redux/contacts/contactsOperations';
import { getFilter, getfiteredContacts } from 'redux/filter/filterSelectors';

import s from './ContactList.module.css';
import ContactsItem from './ContactsItem';

const ContactList = () => {
  const contacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);

  const fiteredContacts = getfiteredContacts(filter, contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(fetchDeleteContacts(id));
  };

  return (
    <>
      <ul className={s.contactList}>
        {fiteredContacts.map(({ id, name, number }) => {
          return (
            <ContactsItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
            ></ContactsItem>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
