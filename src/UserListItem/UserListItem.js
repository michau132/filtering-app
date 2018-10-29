import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserListItem.css';

const UserListItem = ({ item }) => (
  <li className={styles.userListItem}>
    <img src={item.picture.large} alt="photos" />
    <h2>{`${item.name.last} ${item.name.first}`}</h2>
    <p>{`Phone: ${item.cell}`}</p>
    <p>{`Email: ${item.email}`}</p>
    <p>{`city: ${item.location.city}`}</p>
    <p>{`state: ${item.location.state}`}</p>
  </li>
);

UserListItem.propTypes = {
  item: PropTypes.shape({
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
  }).isRequired,
};

export default UserListItem;
