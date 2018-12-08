import React from 'react';
import Header from '../Header/Header';
import UserList from '../UserList/UserList';
import styles from './UserInfo.css';

const UserInfo = () => (
  <div className={styles.userInfo}>
    <Header headerTitle="More Info" />
    <UserList />
  </div>
);

export default UserInfo;
