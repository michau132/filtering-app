import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import UserList from '../UserList/UserList';

const UserInfo = (props) => {
  return (
    <div>
      <Header headerTitle="More Info" />
      <UserList {...props} />
    </div>
  );
};

UserInfo.propTypes = {
  
};

export default UserInfo;