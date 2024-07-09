import React from 'react';

const AboutMe = () => (
  <section style={styles.section}>
    <div style={styles.container}>
      <img src="path/to/photo.jpg" alt="Developer" style={styles.image} />
      <p style={styles.text}>Coming Soon</p>
    </div>
  </section>
);

const styles = {
  section: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    margin: '0',
    padding: '0',
  },
  container: {
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '20px',
  },
  text: {
    fontSize: '18px',
    color: '#333',
  },
};

export default AboutMe;
