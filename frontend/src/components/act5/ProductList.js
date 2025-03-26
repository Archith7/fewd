import React from 'react';
import ProductCard from './Productcard';

const ProductList = ({ products }) => {
  return (
    <div className="row">
      {products.map(product => (
        <div className="col-md-4" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
