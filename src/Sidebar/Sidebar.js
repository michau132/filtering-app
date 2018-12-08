import React from 'react';
import { MyConsumer } from '../Provider';
import Header from '../Header/Header';
import ContactList from '../ContactList/ContactList';
import styles from './Sidebar.css';

const Sidebar = () => (
  <MyConsumer>
    {
    ({
      sortAlphabeticByLastName,
      users,
      filter,
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
            onKeyUp={filter}
          />
          <ContactList
            users={users}
            showMoreUserDetails={showMoreUserDetails}
          />
        </div>
      </div>
    )
    }
  </MyConsumer>
);

export default Sidebar;
