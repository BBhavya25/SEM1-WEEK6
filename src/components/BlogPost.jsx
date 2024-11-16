import React from 'react';

const BlogPost = ({ title, content, author }) => {
  return (
    <div style={{ border: '3px solid #ccc', padding: '20px', margin: '10px',height:200,width:200,backgroundColor:'darkgoldenrod', }}>
      <h2>{title }</h2>
      <p>{content}</p>
      <small>Written by: {author}</small>
    </div>
  );
};

export default BlogPost;









