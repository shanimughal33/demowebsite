import React from "react";

const Footer = () => {
  console.log("footer is running 1 st time")
  return (
    <div>
      <footer className="p-4 text-gray-600 bg-gray-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap order-first text-center md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">Links</h2>
              <nav className="mb-10 list-none">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Home</a>
                </li>
                
                <li>
                  <a className="text-gray-600 hover:text-gray-800">About</a>
                </li>
               
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Contact</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">Major Developments</h2>
              <nav className="mb-10 list-none">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Metroplex</a>
                </li>

                <li>
                  <a className="text-gray-600 hover:text-gray-800">Udemy</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Resdon</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">Helping Website</h2>
              <nav className="mb-10 list-none">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Descon</a>
                </li>

                <li>
                  <a className="text-gray-600 hover:text-gray-800">Foodpanda</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Cheezious</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">Feedback</h2>
              <div className="flex flex-wrap items-end justify-center xl:flex-nowrap md:flex-nowrap lg:flex-wrap md:justify-start">
                <div className="relative w-40 mr-2 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4">
                  <label htmlFor="footer-field" className="text-sm leading-7 text-gray-600">Share Your Thoughts</label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                  />
                </div>
                <button className="inline-flex flex-shrink-0 px-6 py-2 text-white bg-indigo-500 border-0 rounded lg:mt-2 xl:mt-0 focus:outline-none hover:bg-indigo-600">Send</button>
              </div>
              <p className="mt-2 text-sm text-center text-gray-500 md:text-left">Give Your Feedback
                <br className="hidden lg:block"/>About Our Prestigious Organization
              </p>
            </div>
          </div>
        </div>
     
      </footer>
    </div>
  );
};

export default Footer;
