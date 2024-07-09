import React from 'react';

const Footer = () => (
  <footer style={styles.footer}>
    <p style={styles.text}>© 2024 Your Name</p>
  </footer>
);

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  text: {
    margin: 0,
  },
};

export default Footer;
