import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const PrimaryButton = ({ to }) => {
  return (
    <Link to={to} className="flex items-center group">
      <button className="bg-primary text-white h-[40px] px-3 py-2">
        Choose Your Right Meal
      </button>
      <FaArrowRight className="inline-block text-white group-hover:translate-x-2 duration-200 p-2 text-base h-[40px] w-[40px] bg-primaryDark" />
    </Link>
  );
};

export default PrimaryButton;
