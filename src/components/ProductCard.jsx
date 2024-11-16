import React from 'react';

const ProductCard = ({ name, price, description }) => {
  return (
    <div style={{ border: '3px solid black', padding: '15px', margin: '10px',height: 250, width:200,justifyContent:'center',borderRadius:10, backgroundColor:'lightcoral'}}>
      <h3>{"VIVO"}</h3>
      <p>Price: ${20}</p>
      <p>{"Vivo is a popular smartphone brand known for its innovative technology, affordable pricing, and focus on offering high-quality camera features"}</p>
    </div>
  );
};

export default ProductCard;
