import React from 'react';

const UserCard = ({ name, email }) => {
  return (
    // <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
    //   <h3>{"bhavya"}</h3>
    //   <p>{"bhavyab@gmail.com"}</p>
    // </div>
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;
