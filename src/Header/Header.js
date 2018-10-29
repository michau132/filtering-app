import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';

const Header = ({ headerTitle }) => (
  <h2 className={styles.headerTitle}>{headerTitle}</h2>
);

Header.propTypes = {
  headerTitle: PropTypes.string.isRequired,
};

export default Header;
