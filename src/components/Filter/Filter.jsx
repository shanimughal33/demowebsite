// src/components/Filter/Filter.jsx

import React, { useState } from 'react';

const Filter = ({ categories, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleFilterChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="py-4 filter-component">
      <select
        value={selectedCategory}
        onChange={handleFilterChange}
        className="p-3 border rounded-md bo4 rder-gray-300"
      >
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
