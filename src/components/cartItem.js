import React, {useState, useEffect} from 'react' 
import { products } from '../products';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/cart';
import pic1 from "../assets/cartpics/pic1.jpg";
const CartItem = (props) => {
    const {productId, quantity} = props.data;
    const [detail, setDetail] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const findDetail = products.filter(product => product.id === productId)[0];
        setDetail(findDetail);
    }, [productId])
    const handleMinusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1
        }));
    }
    const handlePlusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1
        }));
    }
  return (
    <div className='flex items-center justify-between gap-5 p-2 text-white border-b-2 rounded-md bg-slate-600 border-slate-700'>
        <img src={detail.image} alt="" className='w-12'/>
        <h3>{detail.name}</h3>
        <p>${detail.price * quantity}</p>
        <div className='flex justify-between w-20 gap-2'>
            <button className='w-6 h-6 bg-gray-200 rounded-full text-cyan-600' onClick={handleMinusQuantity}>-</button>
            <span>{quantity}</span>
            <button className='w-6 h-6 bg-gray-200 rounded-full text-cyan-600' onClick={handlePlusQuantity}>+</button>
        </div>
    </div>
  )
}

export default CartItem