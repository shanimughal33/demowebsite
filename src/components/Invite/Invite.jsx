import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom
import img1 from '../../assets/images/invitebg.png';

function Invite() {
  return (
    <div>
      <div className="bg-[#182b50] px-8 py-16 font-[sans-serif]">
        <div className="grid items-center justify-center max-w-6xl gap-12 mx-auto md:grid-cols-2">
          <div className="text-center md:text-left">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 md:!leading-[55px]">
              Join Our Community of Food Lovers!
            </h2>
            <p className="text-lg text-white lg:text-xl">
              Partner with us or become a delivery hero—bring fresh, delicious meals to happy customers while earning great rewards!
            </p>
            <Link to="/signup">
              <span className="mt-12 bg-[#a91079] hover:bg-opacity-80 text-white py-3 px-6 rounded-full text-lg lg:text-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl inline-block">
                Sign Up
              </span>
            </Link>
          </div>
          <div className="text-center">
            <img src={img1} alt="Premium Benefits" className="w-full mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invite;
