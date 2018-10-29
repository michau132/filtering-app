import React from 'react';
import PropTypes from 'prop-types';
import UserListItem from '../UserListItem/UserListItem';

const UserList = ({ userCnt }) => (
  <ul>
    {
      userCnt.map((item, i) => (
        <UserListItem item={item} key={i} />
      ))
  }
  </ul>
);

UserList.propTypes = {

};

export default UserList;
