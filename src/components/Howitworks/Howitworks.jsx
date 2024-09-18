import React from 'react';

function Howitworks() {
  return (
    <div>
      <section className="py-12">
        {/* Container */}
        <div className="flex flex-col items-center justify-center w-full px-5 py-16 mx-auto max-w-7xl md:px-10 md:py-20">
          {/* HEADING TEXT */}
          <p className="mb-2 text-sm font-medium text-center font-inter">3 SIMPLE STEPS</p>
          <h1 className="text-3xl font-bold text-center lg:text-4xl">How Our Service Works</h1>
          <p className="max-w-lg px-5 mx-auto mt-4 mb-12 text-base font-light text-center text-gray-500 font-inter">
            Experience quick and easy food delivery in just three steps.
          </p>
          {/* HOW IT WORKS STEPS */}
          <div className="flex flex-col items-start justify-center lg:flex-row">
            {/* STEP 1 */}
            <div className="relative flex w-full my-8 rounded-md lg:mx-8 lg:flex-col">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-md">
                <h2 className="text-3xl font-medium">1</h2>
              </div>
              <div className="ml-6 lg:ml-0">
                <h2 className="mb-5 text-xl font-medium lg:mt-8">Choose Your Meal</h2>
                <p className="max-w-md pr-5 text-base text-gray-500 font-inter">
                  Browse through our extensive menu, explore different categories, and select your favorite dishes to add to your cart.
                </p>
              </div>
            </div>
            {/* MOBILE LINE */}
            <svg
              className="absolute -bottom-[48px] left-[28px] lg:hidden"
              width="12"
              height="70"
              viewBox="0 0 12 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 0.226497L0.226497 6L6 11.7735L11.7735 6L6 0.226497ZM6 94.7735L11.7735 89L6 83.2265L0.226497 89L6 94.7735ZM5 6V10.15H7V6H5ZM5 18.45V26.75H7L7 18.45H5ZM5 35.05L5 43.35H7V35.05H5ZM5 51.65L5 59.95H7L7 51.65H5ZM5 68.25L5 76.55H7L7 68.25H5ZM5 84.85L5 89H7V84.85H5Z"
                fill="black"
              ></path>
            </svg>
            {/* STEP 2 */}
            <div className="relative flex w-full my-8 rounded-md lg:mx-8 lg:flex-col">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-md">
                <h2 className="text-3xl font-medium">2</h2>
              </div>
              <div className="ml-6 lg:ml-0">
                <h2 className="mb-5 text-xl font-medium lg:mt-8">Place Your Order</h2>
                <p className="max-w-md pr-5 text-base text-gray-500 font-inter">
                  Once you’ve chosen your meal, proceed to checkout, select your preferred payment method, and confirm your order.
                </p>
              </div>
            </div>
            {/* MOBILE LINE */}
            <svg
              className="absolute -bottom-[48px] left-[28px] lg:hidden"
              width="12"
              height="70"
              viewBox="0 0 12 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 0.226497L0.226497 6L6 11.7735L11.7735 6L6 0.226497ZM6 94.7735L11.7735 89L6 83.2265L0.226497 89L6 94.7735ZM5 6V10.15H7V6H5ZM5 18.45V26.75H7L7 18.45H5ZM5 35.05L5 43.35H7V35.05H5ZM5 51.65L5 59.95H7L7 51.65H5ZM5 68.25L5 76.55H7L7 68.25H5ZM5 84.85L5 89H7V84.85H5Z"
                fill="black"
              ></path>
            </svg>
            {/* STEP 3 */}
            <div className="relative flex w-full my-8 rounded-md lg:mx-8 lg:flex-col">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-md">
                <h2 className="text-3xl font-medium">3</h2>
              </div>
              <div className="ml-6 lg:ml-0">
                <h2 className="mb-5 text-xl font-medium lg:mt-8">Enjoy Your Meal</h2>
                <p className="max-w-md pr-5 text-base text-gray-500 font-inter">
                  Sit back and relax while we prepare and deliver your food fresh and fast. Enjoy your meal at your convenience!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Howitworks;
