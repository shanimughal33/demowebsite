import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleInputChange}
      placeholder="Search products..."
      className="w-full px-4 py-2 border rounded-md md:w-72 focus:outline-none focus:ring focus:border-blue-300"
    />
  );
};

export default Search;
