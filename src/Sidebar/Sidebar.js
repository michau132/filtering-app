import React from 'react';
import PropTypes from 'prop-types';
import ProductTile from '../contact';
import Header from '../Header/Header';

const Sidebar = ({sortAlphabeticByLastName, users, filterHandle, handler}) => {
  return (
    <div>
        <Header headerTitle="Contacts" />
        <button onClick={ sortAlphabeticByLastName }>Sort by last name</button>
        <input type="text" placeholder={'type a name'} onKeyUp={ filterHandle }/>
        { users.map(( contact , i ) =>
            <ProductTile key={ i }
                          item={ contact }
                          handler = { handler }
            />
        ) }
    </div>
  );
};

Sidebar.propTypes = {
  
};

export default Sidebar;