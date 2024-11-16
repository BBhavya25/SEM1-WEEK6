import React from 'react';

function StyledButton({ className, onClick, children }) {
  const styles = {
    primary: {
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    secondary: {
      backgroundColor: 'red',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <button
      style={className === 'primary' ? styles.primary : styles.secondary}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default StyledButton;
