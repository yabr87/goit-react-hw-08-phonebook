import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from 'redux/contacts/contactsSelectors';
import { fetchAllContacts } from 'redux/contacts/contactsOperations';
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
            ></ContactsItem>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
