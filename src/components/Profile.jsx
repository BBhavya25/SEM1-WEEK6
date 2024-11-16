import React from 'react';

function Profile({ name, location, profilePicture }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', textAlign: 'center' }}>
      <img 
        src={profilePicture} 
        alt={`${name}'s profile`} 
        style={{ width: '100px', height: '100px', borderRadius: '50%' }} 
      />
      <h2>{name}</h2>
      <p>Location: {location}</p>
    </div>
  );
}

export default Profile;
