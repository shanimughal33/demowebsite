import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem';
import { toggleStatusTab } from '../stores/cart';
import PrimaryButton from './Shared/PrimaryButton';
import { Link } from 'react-router-dom';
const CartTab = () => {
    const carts = useSelector(store => store.cart.items);
    const statusTab = useSelector(store => store.cart.statusTab);
    const dispatch = useDispatch();
    
    const handleCloseTabCart = () => {
        dispatch(toggleStatusTab());
    }
    
    return (
        <div className={`absolute   right-0 top-0 z-50 bg-gradient-to-b from-blue-100 via-teal-50 to-white  shadow-2xl w-96 h-auto grid grid-rows-[60px_1fr_60px] 
            transform transition-transform duration-500
            ${statusTab === false ? "translate-x-full" : ""}`}>
            <h2 className='p-5 text-2xl font-cursive  '>YOUR SELECTED ITEMS</h2>
            
            <div className='p-5'>
                {carts.map((item, key) => 
                    <CartItem key={key} data={item} />
                )}
            </div>
            <div className='flex justify-between items-center p-5'>
  <button 
    className='px-6 py-2 font-semibold text-white rounded-md btn-grad2' 
    onClick={handleCloseTabCart}
  >
    CLOSE
  </button>
  
  <Link to="/Checkout">
    <button 
      className='px-6 py-2 font-semibold text-white rounded-md btn-grad2' 
      onClick={handleCloseTabCart}
    >
      CHECKOUT
    </button> 
  </Link>
</div>



        </div>
    );
}

export default CartTab;
