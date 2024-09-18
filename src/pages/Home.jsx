import React, { useState } from 'react';
import { products } from '../products.js';
import ProductCart from '../components/productCart.js';
import Search from '../components/Search/Search.jsx';
import Filter from '../components/Filter/Filter.jsx'; // Import the Filter component
import Header from '../components/header.js';
import CartTab from '../components/cartTab.js';
import Navbar2 from '../components/Navbar2/Navbar2.jsx';

export const Home = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState(''); // State to store selected category

  // Example categories (you can replace this with dynamic categories if needed)
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
      <h1 className='my-5 ml-10 text-3xl'>MENU</h1>

    <div className="flex justify-center align-middle">
  
    <Search onSearch={handleSearch} />
    <Filter categories={categories} onFilterChange={handleFilterChange} />
    </div>
      

      {/* Display filtered products */}
      <div className='grid grid-cols-3 gap-3 sm:grid-cols-3 lg:grid-cols-5'>
      {filteredProducts.map((product, key) => 
        <ProductCart key={key} data={product} />
      )}
    </div>

    </div>
  );
};
export default Home; 