import React from "react";
import { useNavigate } from "react-router-dom"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/images/Dessert (1).jpg"
import img2 from "../assets/images/Dessert (2).jpg"
import img3 from "../assets/images/Pizza.jpg"

const Carousel = () => {
  const navigate = useNavigate(); // Use navigate hook to go to category pages

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const images = [
    {
      src: img3,
      alt: "Delicious Pizza",
      category: "Pizza", // Category name must match the product.js category
    },
    {
      src: img2,
      alt: "Drinks",
      category: "Beverages", // Example, add more categories as needed
    },
    {
      src: img1,
      alt: "Cakes",
      category: "Desserts", // This category will filter burgers
    },
  ];

  const handleClick = (category) => {
    // Navigate to category
    navigate(`/categories/${category}`);
  };

  return (
    <div className="max-w-4xl p-4 mx-auto mt-8 carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer"
            onClick={() => handleClick(image.category)} // Navigate on click
          >
            <img
              className="object-cover w-full rounded-lg shadow-lg h-96"
              src={image.src}
              alt={image.alt}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <h2 className="text-3xl font-bold text-white">{image.alt}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
