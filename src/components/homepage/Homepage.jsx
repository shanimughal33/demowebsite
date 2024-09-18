import React from 'react';

import Layout from '../layout.js';
import Home from '../../pages/Home.jsx';
import Detail from '../../pages/detail.js';
import Navbar from "../Navbar/Navbar.jsx";
import Hero from "../Hero/Hero.jsx";
import Banner from "../Banner/Banner.jsx";
import About from "../About/About.jsx";
import Services from "../Services/Services.jsx";
import Footer from "../Footer/Footer.jsx";
import Popup from "../Popup/Popup.jsx";
import Whychooseus from "../Whychooseus/Whychooseus.jsx";
// import FullAddToCart from './pages/Fulladdtocart.jsx'; 
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Slider from '../Slider/slider.jsx';
import Productmenu from '../Productmenu/Productmenu.jsx';
import Checkout from '../Checkout/Checkout.jsx';
import AddressForm from '../Addressform.jsx';
import Carousel from '../../carosel/Carosel.jsx';
import TestimonialCard from '../Testimonial/Testimonial.jsx';
import Invite from '../Invite/Invite.jsx';
import Howitworks from '../../components/Howitworks/Howitworks.jsx';
import Login from '../RegisterUser/login/login.jsx';
import Sidebar, { SidebarWithBurgerMenu } from '../Sidebar/Sidebar.js';
function Homepage() {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    console.log("App component mounted"); // Log when App component is mounted
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden">
      
    
    <Navbar/>
        <Hero />
     
        <Banner />
         
        <Carousel/>
        
        <Whychooseus />
      
      <Howitworks/>
        <TestimonialCard/>
        <Invite/>
        <About handleOrderPopup={handleOrderPopup} />
        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      
    </div>
  );
}

export default Homepage;
