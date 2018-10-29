import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from './ContactList.css';

const ContactList = ({ users, showMoreUserDetails }) => (
  <ul className={styles.contactList}>
    { users.map((contact, i) => (
      <ContactListItem
        key={contact.id.value || i}
        contact={contact}
        showMoreUserDetails={showMoreUserDetails}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    picture: PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
  showMoreUserDetails: PropTypes.func.isRequired,
};

export default ContactList;
