import React from 'react';
import { MyConsumer } from '../Provider';
import UserListItem from '../UserListItem/UserListItem';
import styles from './UserList.css';

const UserList = () => (
  <MyConsumer>
    {
      ({ userCnt }) => (
        <ul className={styles.userList}>
          {
              userCnt.map((item, i) => (
                <UserListItem item={item} key={i} />
              ))
          }
        </ul>
      )
    }
  </MyConsumer>
);

export default UserList;
