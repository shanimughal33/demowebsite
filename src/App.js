import React from 'react';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Importing Components
import Navbar from "./components/Navbar/Navbar.jsx";  // Navbar for global navigation
import Popup from "./components/Popup/Popup.jsx";    // Popup for order notifications
import CartTab from './components/cartTab';          // CartTab for viewing cart items
import Category from './pages/Category.jsx';
// Importing Pages
import Homepage from './components/homepage/Homepage.jsx';  // Main homepage
import Home from './pages/Home.jsx';  // Home page content
import Detail from './pages/detail';  // Detailed view for individual items
import FullAddToCart from './pages/Fulladdtocart.jsx';  // Full screen cart page
import Checkout from './components/Checkout/Checkout.jsx';
import AddressForm from './components/Addressform.jsx';
import Login from './components/RegisterUser/login/login.jsx';
import Signup from "./components/RegisterUser/Signup/Signup.jsx"
function App() {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  // Initializing AOS for scroll animations
  React.useEffect(() => {
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
      <BrowserRouter>
     {/* Navbar is placed outside of Routes for global access */}
        
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route index element={<Home />} />
            <Route path="/:slug" element={<Detail />} /> {/* Product details page */}
          </Route>
          <Route path="/fulladdtocart" element={<FullAddToCart />} /> {/* Full screen cart page */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/Addressform" element={<AddressForm />} /> {/* Checkout page */}
          <Route path="/categories/:categoryName" element={<Category />} /> 
          <Route path="/Login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} /> 
        </Routes>

        <CartTab /> {/* Global CartTab for viewing the cart */}
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} /> {/* Order confirmation popup */}
      </BrowserRouter>
    </div>
  );
}

export default App;
