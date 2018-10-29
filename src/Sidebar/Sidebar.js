import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import ContactList from '../ContactList/ContactList';
import styles from './Sidebar.css';

const Sidebar = ({
  sortAlphabeticByLastName,
  users,
  filterHandle,
  showMoreUserDetails,
}) => (
  <div className={styles.sidebar}>
    <Header headerTitle="Contacts" />
    <div className={styles.sidebarContent}>
      <button className={styles.sidebarSortButton} onClick={sortAlphabeticByLastName} type="button">Sort by last name</button>
      <input
        className={styles.sidebarSearchInput}
        type="text"
        placeholder="type a name"
        onKeyUp={filterHandle}
      />
      <ContactList
        users={users}
        showMoreUserDetails={showMoreUserDetails}
      />
    </div>
  </div>
);


Sidebar.propTypes = {
  sortAlphabeticByLastName: PropTypes.func.isRequired,
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
  filterHandle: PropTypes.func.isRequired,
};

export default Sidebar;
