import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/shared/components/Button';
import { ContactItem, Tel, ContactLink } from './ContactsItem.styles';

const ContactsItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ContactItem>
      <ContactLink to={`/contacts/${id}`} /*state={{ from: location }}*/>
        <span>{name}:</span>
        <Tel>{number}</Tel>
        <Button
          text="delete"
          type="button"
          onBtnClick={() => onDeleteContact(id)}
        />
      </ContactLink>
    </ContactItem>
  );
};
ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ContactsItem;
