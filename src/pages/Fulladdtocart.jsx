import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/header';
import CartTab from '../components/cartTab';
import Home from './Home';
import Detail from './detail';
import ProductCart from '../components/productCart';
import Navbar2 from '../components/Navbar2/Navbar2';
import Home2 from './Home2';
const FullAddToCart = () => {
  const statusTabCart = useSelector(store => store.cart.statusTab);
  const navigate = useNavigate(); // Moved inside Layout component

  return (
    <>
    
    <div 
    
      data-aos="fade-left"
      data-aos-delay="100"
      className="min-h-screen p-6 text-gray-700 "
    >
      <main
        className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500 ${
          statusTabCart ? '-translate-x-56' : ''
        }`}
      >
      
        <div> 
    
        </div>
        
        
        <Outlet />
      </main>
    
     <Home2/>
    
    </div>
    </>
  );
};

export default FullAddToCart;
