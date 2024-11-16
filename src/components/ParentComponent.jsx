import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent({ message }) {
  return (
    <div>
      <ChildComponent message={message} />
    </div>
  );
}

export default ParentComponent;
