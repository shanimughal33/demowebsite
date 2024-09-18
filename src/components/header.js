import React, { useState, useEffect} from 'react' 
import { Link } from 'react-router-dom'
import iconCart from '../assets/images/iconCart.png' 
import { useSelector, useDispatch } from 'react-redux' 
import { toggleStatusTab } from '../stores/cart'
import CartTab from './cartTab'
import { FaCartFlatbed, FaCartShopping } from 'react-icons/fa6'
import { FaShoppingCart } from 'react-icons/fa'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import img1 from "../assets/images/shopping-cart.png"
import { BsFillCartFill } from "react-icons/bs";
const Header = () => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    useEffect(() => {
        let total = 0;
        carts.forEach(item => total += item.quantity);
        setTotalQuantity(total);
    }, [carts])
    const handleOpenTabCart = () => {
        dispatch(toggleStatusTab());
    }
  return (
    <header className='flex items-center justify-between mb-5'>
        {/* <Link to="/" className='text-xl font-semibold'>Home.</Link> */}
        
        <div className='relative flex items-center justify-center w-10 h-8 pt-2 bg-transparent rounded-full' onClick={handleOpenTabCart}>
        <div className='pt-2 pr-2 lg:pr-0'>
        
        <button className="items-center px-5 py-2 text-white -translate-x-6 bg-black border border-black rounded-full md:flex ">
        <p className='mr-1 font-semibold'>Cart</p>
        <BsFillCartFill size={20} className="mr-1" /> 
      </button>

</div>
            <span className='absolute items-center justify-center hidden w-5 h-5 text-sm text-white bg-red-500 rounded-full top-7 right-2 md:flex '>{totalQuantity}</span>
        </div>
    </header>
    
  )

}


export default Header