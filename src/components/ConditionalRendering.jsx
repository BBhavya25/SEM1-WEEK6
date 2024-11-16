import React from 'react';

const ConditionalRendering = () => {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? (
        <p><h1>Welcome back, user!</h1></p>
      ) : (
        <p>Please log in to continue.</p>
      )}
    </div>
  );
};

export default ConditionalRendering;
