// Layout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom'; // Link for category navigation
import { useSelector } from 'react-redux';
import CartTab from './cartTab';
import Carousel from '../carosel/Carosel.jsx'; // Assuming this is your carousel component

const Layout = () => {
    const statusTabCart = useSelector(store => store.cart.statusTab);

    return (
        <div className="bg-gray-100">
            {/* Add a simple navigation to categories */}
            <nav className="p-4 bg-white shadow-md">
                <ul className="flex space-x-4">
                    <li><Link to="/category/Burgers" className="text-blue-500">Burgers</Link></li>
                    <li><Link to="/category/Pizza" className="text-blue-500">Pizza</Link></li>
                    {/* Add more categories as needed */}
                </ul>
            </nav>

            {/* Add a carousel banner */}
            <Carousel />

            <main
                className={`transition-transform duration-300 ease-in-out ${statusTabCart ? 'md:ml-64' : ''}`}
                style={{ paddingBottom: '70px' }}
            >
                <div className="container p-4 mx-auto md:p-8">
                    <Outlet /> {/* This will render category-specific products */}
                </div>
            </main>

            <CartTab className="fixed bottom-0 right-0 z-50" />
        </div>
    );
};

export default Layout;
