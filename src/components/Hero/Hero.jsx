import React from "react";
import hero from '../../assets/hero.png'; // Image used in the img tag
import backgroundImage from '../../assets/images/foodherobg2.jpg'; // Import the background image
import PrimaryButton from "../Shared/PrimaryButton";
import Navbar from "../Navbar/Navbar";

// Correct Bgstyle
const Bgstyle = {
  backgroundImage: `url(${backgroundImage})`, // Use the imported image
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: "100%",
  height: "107vh", // Ensure the height covers the viewport
};

const Hero = () => {
  return (
    <>
  
    <div className="relative z-[1]" style={Bgstyle}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div> 
      {/* Overlay darkens the background */}

      <div className="container relative z-10 py-10 sm:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center min-h-[90vh] sm:min-h-[900px] sm:h-[900px] px-6 sm:px-12 lg:px-16">
          {/* Text content */}
          <div className="order-2 text-white sm:space-y-5 sm:order-1">
            <h1 
              data-aos="fade-up" 
              className="pt-2 text-3xl leading-tight sm:text-5xl lg:text-6xl lg:leading-tight"
            >
              Fresh And Healthy Meal Plan{" "}
              <span className="text-5xl sm:text-7xl lg:text-8xl text-secondary font-cursive">
                Delivery
              </span>{" "}
              In Pakistan
            </h1>
            <p 
              data-aos="fade-up" 
              data-aos-delay="300" 
              className="py-3 text-base lg:pr-64 sm:text-lg lg:text-xl lg:py-1"
            >
              Delicious Meals Delivered To Your Door
            </p>
            <div 
              data-aos="fade-up" 
              data-aos-delay="500" 
              className="flex justify-start py-2 md:py-0 sm:justify-start "
            >
              <PrimaryButton to="/fulladdtocart" /> {/* Pass the path as a prop */}
            </div>
          </div>

          {/* Image section */}
          <div 
            data-aos="fade-up-right" 
            className="relative z-30 order-1 sm:order-2"
          >
            <img
              src={hero}
              alt="Hero"
              className="w-full scale-100 sm:scale-110 lg:scale-125 sm:translate-y-20"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
