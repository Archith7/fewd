import React from 'react';

const HeroBanner = () => {
  return (
    <div className="hero-banner text-center py-5">
      <h1>Welcome to Our Shop</h1>
      <p>Best deals on all your favorite products!</p>
      <a href="/shop" className="btn btn-primary">Shop Now</a>
    </div>
  );
}

export default HeroBanner;
