import React from 'react';
import PropTypes from 'prop-types';

const UserListItem = ({ item }) => (
  <li>
    <img src={ item.picture.large } alt=""/>
    <h2>{ item.name.last + ' ' + item.name.first }</h2>
    <p>
      Phone: 
      {item.cell}
    </p>
    <p>
      Email: 
      {item.email}
    </p>
    {
      Object.entries(item.location).map(adress => (
        <span key={adress}>
          {adress.join(': ')}
        </span>
      ))
    }
  </li>
);

UserListItem.propTypes = {

};

export default UserListItem;
