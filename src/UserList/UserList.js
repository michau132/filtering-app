import React from 'react';
import PropTypes from 'prop-types';
import UserListItem from '../UserListItem/UserListItem';
import styles from './UserList.css';

const UserList = ({ userCnt }) => (
  <ul className={styles.userList}>
    {
      userCnt.map((item, i) => (
        <UserListItem item={item} key={i} />
      ))
  }
  </ul>
);

UserList.propTypes = {
  userCnt: PropTypes.arrayOf(PropTypes.shape({
    picture: PropTypes.shape({
      large: PropTypes.string.isRequired,
      medium: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.shape({
      last: PropTypes.string.isRequired,
      first: PropTypes.string.isRequired,
    }).isRequired,
    cell: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};

export default UserList;
