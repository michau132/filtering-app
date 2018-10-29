import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactListItem.css';

const ContactListItem = ({ contact, showMoreUserDetails }) => (
  <li className={styles.contactListItem} onClick={showMoreUserDetails(contact)} onKeyPress={() => {}} role="presentation">
    <img className={styles.contactListItemImage} src={contact.picture.thumbnail} alt="a" />
    <h3>
      {`${contact.name.last} ${contact.name.first}`}
    </h3>
  </li>
);

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    picture: PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  showMoreUserDetails: PropTypes.func.isRequired,
};

export default ContactListItem;
