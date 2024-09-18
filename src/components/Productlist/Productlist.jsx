// src/components/ProductList.js
import React, { useState } from 'react';
import { products } from '../data/productsData';
import ProductCart from './ProductCart';

const ProductList = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProducts = selectedCategory === 'All' 
        ? products 
        : products.filter(product => product.category === selectedCategory);

    return (
        <div>
            <h1>Products</h1>
            <div>
                <button onClick={() => setSelectedCategory('All')}>All</button>
                <button onClick={() => setSelectedCategory('Burgers')}>Burgers</button>
                <button onClick={() => setSelectedCategory('Pizza')}>Pizza</button>
                <button onClick={() => setSelectedCategory('Sushi')}>Sushi</button>
                <button onClick={() => setSelectedCategory('Fried Chicken')}>Fried Chicken</button>
                <button onClick={() => setSelectedCategory('Pasta')}>Pasta</button>
                <button onClick={() => setSelectedCategory('Desserts')}>Desserts</button>
                <button onClick={() => setSelectedCategory('Beverages')}>Beverages</button>
            </div>
            <div className="product-grid">
                {filteredProducts.map(product => (
                    <ProductCart key={product.id} data={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
