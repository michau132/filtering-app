import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './App.css';
import UserInfo from '../UserInfo/UserInfo';

const App = () => (
  <section className={styles.app}>
    <Sidebar />
    <UserInfo />
  </section>
);

export default App;
