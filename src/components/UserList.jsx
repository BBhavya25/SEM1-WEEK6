import React from 'react';
import UserCard from './UserCard';

function UserList() {
  const users = [
    { name: 'Harshu', email: 'harshu@example.com' },
    { name: 'Baby', email: 'baby@example.com' },
    { name: 'Cherry', email: 'cherry@example.com' },
  ];

  return (
    <div>
      {users.map((user, index) => (
        <UserCard key={index} name={user.name} email={user.email} />
      ))}
    </div>
  );
}

export default UserList;
