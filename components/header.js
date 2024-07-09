import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={styles.header}>
    <nav>
      <ul style={styles.navList}>
        <li style={styles.navItem}><Link to="/">About Me</Link></li>
        <li style={styles.navItem}><Link to="/projects">Projects</Link></li>
        <li style={styles.navItem}><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

const styles = {
  header: {
    backgroundColor: '#333',
    padding: '10px 0',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 15px',
  },
};

export default Header;
