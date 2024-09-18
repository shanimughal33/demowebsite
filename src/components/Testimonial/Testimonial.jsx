import React from 'react';

const TestimonialCard = () => {
  return (
    <>
      <div className='flex flex-col justify-center mt-6 mb-4 align-middle lg:flex-row'>
        {/* 1st Testimonial */}
        <div className="font-[sans-serif] max-w-[410px] h-auto p-6 hover:bg-gray-100 hover:scale-105 rounded-lg mx-auto shadow-[0_6px_18px_-6px_rgba(193,195,248)] bg-white relative mt-12">
          <img src="https://th.bing.com/th/id/OIP.VL0pJe5eB39roZBCOK1liQHaE7?w=236&h=180&c=7&r=0&o=5&pid=1.7" alt="Profile" className="absolute left-0 right-0 w-16 h-16 mx-auto rounded-full -top-7" />
          <div className="mt-6 text-center">
            <div>
              <h4 className="text-sm font-extrabold text-gray-800">Babar Azam</h4>
              <p className="text-xs text-gray-500 mt-0.5">Cricketer | Pakistan National Team</p>
            </div>

            <div className="mt-4">
              <h2 className="mb-2 text-lg font-extrabold text-gray-800">Fantastic Experience!</h2>
              <p className="text-sm leading-relaxed text-gray-800">The quality of the food was top-notch, and the delivery was swift. Truly a seamless experience from start to finish. Will definitely order again!</p>
            </div>

            <div className="flex justify-center mt-4 space-x-1">
              {/* Star Rating */}
              {[...Array(4)].map((_, i) => (
                <svg key={i} className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              ))}
              <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* 2nd Testimonial */}
        <div className="font-[sans-serif] max-w-[410px] h-auto p-6 rounded-lg hover:bg-gray-100 hover:scale-105 mx-auto shadow-[0_6px_18px_-6px_rgba(193,195,248)] bg-white relative mt-12">
          <img src="https://th.bing.com/th?q=Shaheen+Shah+Afridi+Height+in+Feet&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=PK&setlang=en&adlt=moderate&t=1&mw=247" alt="Profile" className="absolute left-0 right-0 w-16 h-16 mx-auto rounded-full -top-7" />
          <div className="mt-6 text-center">
            <div>
              <h4 className="text-sm font-extrabold text-gray-800">Shaheen Afridi</h4>
              <p className="text-xs text-gray-500 mt-0.5">Cricketer | Pakistan National Team</p>
            </div>

            <div className="mt-4">
              <h2 className="mb-2 text-lg font-extrabold text-gray-800">Exceptional Service</h2>
              <p className="text-sm leading-relaxed text-gray-800">The speed and efficiency of the delivery were beyond my expectations. The food was still hot and fresh when it arrived. Definitely my go-to for future orders!</p>
            </div>

            <div className="flex justify-center mt-4 space-x-1">
              {[...Array(4)].map((_, i) => (
                <svg key={i} className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              ))}
              <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* 3rd Testimonial */}
        <div className="font-[sans-serif] max-w-[410px] h-auto p-6 rounded-lg hover:bg-gray-100 hover:scale-105 mx-auto shadow-[0_6px_18px_-6px_rgba(193,195,248)] bg-white relative mt-12">
          <img src="https://th.bing.com/th/id/OIP.I81cTFbwhETTKNVV2yQjCAHaEo?w=269&h=180&c=7&r=0&o=5&pid=1.7" alt="Profile" className="absolute left-0 right-0 w-16 h-16 mx-auto rounded-full -top-7" />
          <div className="mt-6 text-center">
            <div>
              <h4 className="text-sm font-extrabold text-gray-800">Mohammad Rizwan</h4>
              <p className="text-xs text-gray-500 mt-0.5">Cricketer | Pakistan National Team</p>
            </div>

            <div className="mt-4">
              <h2 className="mb-2 text-lg font-extrabold text-gray-800">Highly Recommend!</h2>
              <p className="text-sm leading-relaxed text-gray-800">Absolutely love the variety and taste of the food! Ordering is super easy, and the service is always reliable. A great experience overall!</p>
            </div>

            <div className="flex justify-center mt-4 space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
