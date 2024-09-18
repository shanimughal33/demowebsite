import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';
import { FaCheck } from 'react-icons/fa'; // For the tick icon

// Star rating component
const StarRating = ({ rating = 0 }) => {
    const totalStars = 5;
    const safeRating = Math.min(Math.max(rating, 0), totalStars);

    const filledStars = Math.floor(safeRating);
    const hasHalfStar = safeRating % 1 >= 0.5;

    return (
        <div className="flex">
            {Array.from({ length: filledStars }).map((_, index) => (
                <span className='text-2xl text-yellow-500' key={index}>&#9733;</span>
            ))}
            {hasHalfStar && <span className='text-2xl text-yellow-500'>&#189;</span>}
            {Array.from({ length: totalStars - filledStars - (hasHalfStar ? 1 : 0) }).map((_, index) => (
                <span className='text-2xl text-gray-300' key={index + filledStars}>&#9734;</span>
            ))}
        </div>
    );
};

const ProductCart = (props) => {
    const { id, name, price, originalPrice, rating, category, image, slug } = props.data;
    const dispatch = useDispatch();
    const [isAdded, setIsAdded] = useState(false); // State to track if the item is added

    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
        setIsAdded(true); // Set state to true when the item is added
    };

    // Calculate percentage off
    const percentOff = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

    return (
        <div className='relative w-56 h-auto p-4 transition-shadow duration-300 bg-white border border-gray-200 shadow-lg hover:shadow-2xl group hover:bg-black/5 '>
            <Link to={slug} className='block'>
                <div className='relative overflow-hidden rounded-md'>
                    <img src={image} alt={name} className='object-cover w-full h-32 transition-transform duration-300 transform hover:scale-125' />
                </div>
            </Link>
            <h3 className='py-3 text-xl font-semibold text-center text-gray-800'>{name}</h3>

            {/* Star Rating */}
            <div className="flex justify-center py-2">
                <StarRating rating={rating} />
            </div>

            <div className='flex items-center justify-center'>
                <p className='text-xl font-semibold'>
                    $<span>{price}</span>
                    {originalPrice && (
                        <span className='ml-2 text-sm text-red-500 line-through'>
                            ${originalPrice}
                        </span>
                    )}
                </p>

                {/* Display percent off */}
                {percentOff > 0 && (
                    <span className='absolute px-2 py-1 text-white bg-red-500 rounded-sm top-4 right-4'>
                        {percentOff}% OFF
                    </span>
                )}
            </div>

            {/* Add to Cart Button */}
            <button
                className={`relative  flex items-center justify-center ml-8 mt-2  gap-2 px-3 py-2 transition-transform duration-300 shadow-md text-black my-2 rounded-sm hover:scale-105 mr-7 hover:text-white btn-grad ${
                    isAdded ? 'bg-green-500 text-white' : ''
                }`}
                onClick={handleAddToCart}
                disabled={isAdded} // Disable the button once added
            >
                {isAdded ? (
                    <>
                    <div className='flex justify-center gap-1 px-4 align-middle '>
                        <div className='pt-1 text-base '>
                        <FaCheck />
                        </div>
                        <div className='pt-[1px]'>
                        Added
                        </div>

                    </div>

                    </>
                ) : (
                    'Add To Cart'
                )}
            </button>
            
        </div>
    );
};

export default ProductCart;
