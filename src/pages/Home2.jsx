import React, { useState } from 'react';
import { products } from '../products.js';
import ProductCart from '../components/productCart.js';
import Navbar from '../components/Navbar/Navbar.jsx'; // Updated Navbar import

export const Home2 = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState(''); // State to store selected category

  // Example categories
  const categories = ['Burgers', 'Pizza', 'Sushi', 'Desserts', 'Drinks'];

  // Function to handle the search query
  const handleSearch = (query) => {
    filterProducts(query, category);
  };

  // Function to handle the category filter
  const handleFilterChange = (selectedCategory) => {
    setCategory(selectedCategory);
    filterProducts('', selectedCategory);
  };

  // Function to filter products based on search query and category
  const filterProducts = (query, category) => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (query) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  return (
    <div>
      {/* Merged Navbar */}
      <Navbar className="hidden sm:flex" onSearch={handleSearch} categories={categories} onFilterChange={handleFilterChange} />

      {/* Display filtered products */}
      <div className='grid grid-cols-2 gap-3 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 '>
        {filteredProducts.map((product, key) => 
          <ProductCart key={key} data={product} />
        )}
      </div>
    </div>
  );
};

export default Home2;
