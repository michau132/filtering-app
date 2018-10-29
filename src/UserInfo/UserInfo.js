import React from 'react';
import Header from '../Header/Header';
import UserList from '../UserList/UserList';
import styles from './UserInfo.css';

const UserInfo = props => (
  <div className={styles.userInfo}>
    <Header headerTitle="More Info" />
    <UserList {...props} />
  </div>
);

export default UserInfo;
