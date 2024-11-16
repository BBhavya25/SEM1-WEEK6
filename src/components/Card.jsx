import React from 'react';

function Card({ children }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', borderRadius: '5px',backgroundColor:'lightgreen' }}>
      {children}
    </div>
  );
}

export default Card;
