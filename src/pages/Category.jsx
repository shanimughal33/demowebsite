import React from "react";
import { useParams } from "react-router-dom"; // Use to get the category from URL
import { products } from "../products"; // Import your products from product.js
import ProductCart from "../components/productCart"; // Reuse ProductCart component

const Category = () => {
  const { categoryName } = useParams(); // Get category from URL

  // Filter products by category
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="container p-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center capitalize">
        {categoryName} Products
      </h1>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCart key={product.id} data={product} />
          ))}
        </div>
      ) : (
        <p className="text-center">No products found in this category.</p>
      )}
    </div>
  );
};

export default Category;
