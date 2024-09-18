import React from 'react'
import { FaBiking, FaBus, FaCocktail, FaCoffee, FaCreditCard, FaDownload, FaDrumstickBite, FaHome, FaMapMarkedAlt, FaPeopleArrows, FaPeopleCarry, FaPersonBooth, FaPizzaSlice, FaTruck, FaUser, FaUtensils } from 'react-icons/fa'


function  Productmenu() {
  console.log("Statistics is running 1 st time")
  return (
    <div className=''>
<section>

  <div data-aos ="fade-left" class="  py-24 px-5   bg-gray-100">
    <div data-aos="fade-right" class="text-center mb-20">
      <h1  class="text-2xl font-medium mb-4 ">STATISTICS</h1>
      <p>"Over 1 million meals delivered, with a 98% customer satisfaction rate."
 <br></br>
"Our average delivery time is just 20 minutes, ensuring fast service."
<br></br>
"We partner with over 200 local farms to source the freshest ingredients."
<br></br>
"Our menu features over 150 unique dishes, catering to every taste and dietary need."</p>
    </div>
    <div data-aos="fade-down" class="flex flex-wrap text-center">
      
      <div class="w-full sm:w-1/2 md:w-1/4 p-4">
        <div class="border border-b-8 px-4 py-6  rounded-lg">

        <div className='flex justify-center mb-2 text-3xl text-primary'>
       <FaCreditCard />
        </div>
          <h2 class="text-3xl">1.3K</h2>
          <p>Cash And Deposit Delivery</p>
        </div>
      </div>
      <div className="w-full p-4 sm:w-1/2 md:w-1/4">
        <div className="px-4 py-6 border border-b-8 rounded-lg bg-gradient-to-r from-white via-red-100 to-blue-100">
        <div className='flex justify-center mb-2 text-3xl text-secondary'>
       <FaDrumstickBite />
        </div>
          <h2 class="text-3xl">74</h2>
          <p>QualityFood</p>
        </div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 p-4">
        <div class="border border-b-8 px-4 py-6 bg-gradient-to-r from-white via-red-100 to-blue-100 rounded-lg">
        <div className='flex justify-center mb-2 text-3xl text-primary'>
       <FaTruck />
        </div>
          <h2 class="text-3xl">46</h2>
          <p>Fast Delivery</p>
        </div>
      </div>
    </div>
    <div data-aos="fade-up" class="flex flex-wrap text-center">
      <div class="w-full sm:w-1/2 md:w-1/4  p-4">
      
        <div data-aos="" class="border border-b-8 bg-gradient-to-r from-white via-red-100 to-blue-100 px-4 py-6 rounded-lg ">
       <div className='flex justify-center mb-2 text-3xl text-secondary'>
       <FaCoffee />
        </div> 
          <h2 class="text-3xl">2.7K</h2>
          <p>Trademark Coffee</p>
        </div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 p-4">
        <div class="border border-b-8 px-4 py-6 bg-gradient-to-r from-white via-red-100 to-blue-100 rounded-lg">

        <div className='flex justify-center mb-2 text-3xl text-primary'>
       <FaUtensils />
        </div>
          <h2 class="text-3xl">1.3K</h2>
          <p>Quality Service</p>
        </div>
      </div>
      <div className="w-full p-4 sm:w-1/2 md:w-1/4">
        <div className="px-4 py-6 border border-b-8 rounded-lg bg-gradient-to-r from-white via-red-100 to-blue-100">
        <div className='flex justify-center mb-2 text-3xl text-secondary'>
       <FaCocktail />
        </div>
          <h2 class="text-3xl">74</h2>
          <p>Healthy Drinks</p>
        </div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 p-4">
        <div class="border border-b-8 px-4 py-6 bg-gradient-to-r from-white via-red-100 to-blue-100 rounded-lg">
        <div className='flex justify-center mb-2 text-3xl text-primary'>
       <FaPizzaSlice />
        </div>
          <h2 class="text-3xl">46</h2>
          <p>Healthy Foods</p>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
  )
}

export default Productmenu

