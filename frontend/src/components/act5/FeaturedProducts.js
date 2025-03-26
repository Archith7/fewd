import React from 'react';
import ProductCard from './Productcard';

const FeaturedProducts = ({ featuredProducts }) => {
  return (
    <div className="featured-products py-5">
      <h2>Featured Products</h2>
      <div className="row">
        {featuredProducts.map(product => (
          <div className="col-md-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
