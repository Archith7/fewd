import React from 'react';
import './Categories.css'; // Custom CSS file for categories styling

const Categories = ({ categories, onSelectCategory }) => {
  return (
    <div className="categories-container">
      <h5 className="categories-title">Filter by Categories</h5>
      <div className="categories-list">
        {categories.map(category => (
          <button
            key={category}
            className="category-item btn btn-light"
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
