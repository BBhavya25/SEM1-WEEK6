import React from 'react';

function Notification({ type, message }) {
  const styles = {
    success: { backgroundColor: 'green', color: 'white', padding: '10px' },
    error: { backgroundColor: 'red', color: 'white', padding: '10px' },
    info: { backgroundColor: 'blue', color: 'white', padding: '10px' },
  };

  return <div style={styles[type]}>{message}</div>;
}

export default Notification;
