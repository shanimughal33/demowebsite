import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import Header from "../header";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const menuItems = [
    { icon: <FaHome size={25} className="mr-4 font-semibold" />, text: "Home" },
    { icon: <FaPeopleGroup size={25} className="mr-4 font-semibold" />, text: "About Us" },
    { icon: <MdPhone size={25} className="mr-4 font-semibold" />, text: "Contact Us" },
  ];

  return (
    <div className="absolute top-0 left-0 z-20 w-full">
      <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 shadow-sm bg-transparent">
        {/* Left side */}
        <div className="flex items-center">
          <div onClick={() => setNav(!nav)} className="text-white cursor-pointer translate-x-96 font-cursive">
            <AiOutlineMenu  size={25} />
          </div>
          <h1 className="px-2 text-xl text-white sm:text-3xl lg:text-4xl">
             <span className="font-bold font-cursive">Foodies </span>
          </h1>
          <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
            <p className="p-2 text-white bg-black rounded-full">Delivery</p>
            <p className="p-2">Pickup</p>
          </div>
        </div>

        {/* Search Input */}
        <div className="bg-gray-200 rounded-full hidden  md:flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
          <AiOutlineSearch size={25} />
          <input
            className="w-full p-2 bg-transparent focus:outline-none"
            type="text"
            placeholder="Search foods"
          />
        </div>

        {/* Cart button */}
        <Header />

        {/* Mobile Menu */}
        {/* Overlay */}
        {nav && (
          <div className="fixed top-0 left-0 z-10 w-full h-screen bg-black/80"></div>
        )}

        {/* Side drawer menu */}
        <div
  zz        className={
            nav
              ? "fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300"
              : "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
          }
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={30}
            className="absolute cursor-pointer right-4 top-4 "
          />
          <h2 className="p-4 text-2xl">
          <span className="font-bold font-cursive">Foodies</span>
          </h2>
          <nav>
            <ul className="flex flex-col p-4 text-gray-800">
              {menuItems.map(({ icon, text }, index) => (
                <div key={index} className="py-4">
                  <li className="text-xl flex cursor-pointer w-[50%] rounded-full mx-auto p-2 hover:text-white hover:bg-black">
                    {icon} {text}
                  </li>
                </div>
              ))}
            </ul>
            <div className="ml-36">
            <Header/>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
