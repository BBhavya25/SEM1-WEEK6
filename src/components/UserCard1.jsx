import React from 'react';
import PropTypes from 'prop-types';

function UserCard1({ name, email }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

UserCard1.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
};

UserCard1.defaultProps = {
  email: 'No email provided',
};

export default UserCard1;
