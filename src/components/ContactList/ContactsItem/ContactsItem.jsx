import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem, Tel, ContactLink } from './ContactsItem.styles';

const ContactsItem = ({ id, name, number }) => {
  return (
    <ContactItem>
      <ContactLink to={`/contacts/${id}`} /*state={{ from: location }}*/>
        <span>{name}:</span>
        <Tel>{number}</Tel>
      </ContactLink>
    </ContactItem>
  );
};
ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ContactsItem;
