import React, { useState, useEffect } from 'react';
import pic1 from "../../assets/animatedcart/Foodedeals1.jpg";
import pic2 from "../../assets/animatedcart/fooddeals2.avif";
import pic3 from "../../assets/animatedcart/fooddeals3.avif";
import pic4 from "../../assets/animatedcart/fooddeals4.jpg";
import pic5 from "../../assets/animatedcart/fooddeals5.avif";
import pic6 from "../../assets/animatedcart/fooddeals6.avif";
import pic7 from "../../assets/animatedcart/fooddeals7.avif";
import pic8 from "../../assets/animatedcart/foodeals8.jpg";
import pic9 from "../../assets/animatedcart/fooddeals9.jpg";
import pic10 from "../../assets/animatedcart/fooddeals10.avif";
import pic11 from "../../assets/animatedcart/foodeals11.avif";
import pic12 from "../../assets/animatedcart/fooddeals12.avif";

const deals = [
  {
    title: 'Discount on Burgers',
    description: 'Get 20% off on all burgers this weekend!',
    imgSrc: pic1, // Use the actual imported image here
  },
  {
    title: 'Pizza Combo Offer',
    description: 'Buy 1 Get 1 Free on all large pizzas!',
    imgSrc: pic2, // Placeholder image
  },
  {
    title: 'Sushi Discount',
    description: 'Flat 15% off on sushi orders!',
    imgSrc: pic3, // Placeholder image
  },
  {
    title: 'Sushi Discount',
    description: 'Flat 15% off on sushi orders!',
    imgSrc: pic11, // Placeholder image
  },
  {
    title: 'Sushi Discount',
    description: 'Flat 15% off on sushi orders!',
    imgSrc: pic10, // Placeholder image
  },
  {
    title: 'Sushi Discount',
    description: 'Flat 15% off on sushi orders!',
    imgSrc: pic9, // Placeholder image
  },
  {
    title: 'Sushi Discount',
    description: 'Flat 15% off on sushi orders!',
    imgSrc: pic8, // Placeholder image
  },
  {
    title: 'Sushi Discount',
    description: 'Flat 15% off on sushi orders!',
    imgSrc: pic4, // Placeholder image
  },
  {
    title: 'Sushi Discount',
    description: 'Flat 15% off on sushi orders!',
    imgSrc: pic5, // Placeholder image
  },
  {
    title: 'Sushi Discount',
    description: 'Flat 15% off on sushi orders!',
    imgSrc: pic6, // Placeholder image
  },
  {
    title: 'Sushi Discount',
    description: 'Flat 15% off on sushi orders!',
    imgSrc: pic7, // Placeholder image
  },
  
  
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === deals.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Adjust the timing as needed

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? deals.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === deals.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden">
      <div className="flex transition-transform duration-500 ease-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {deals.map((deal, index) => (
          <div key={index} className="min-w-full p-6 bg-gray-100 rounded-lg">
            <img src={deal.imgSrc} alt={deal.title} className="w-full h-56 mb-4 rounded-lg object-aos-item__inner" />
            <h2 className="mb-2 text-2xl font-bold">{deal.title}</h2>
            <p className="text-lg">{deal.description}</p>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 p-2 text-white transform -translate-y-1/2 bg-gray-700 rounded-full top-1/2 hover:bg-gray-800"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 p-2 text-white transform -translate-y-1/2 bg-gray-700 rounded-full top-1/2 hover:bg-gray-800"
      >
        &#8250;
      </button>
    </div>
  );
};

export default Slider;
