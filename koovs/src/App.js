
// import { ButtonGroup } from '@chakra-ui/react';
import './App.css';
import Buttongroup from './components/Buttongroup';
import Home from './pages/Home';
import Productlist from './pages/Productlist';

import SingleProduct from "./pages/SingleProduct"
import SignUp from "./pages/Register"
import Loginpage from "./pages/Login"
import Cart from "./pages/Cart"

import React from "react";
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Success from "./pages/Success";
import { useSelector } from "react-redux";



function App() {
  const user = useSelector((state) => state.user.currentUser);
  
  return (
   < BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Productlist />} />
        <Route path="/product/:id" element={<SingleProduct/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user? <Navigate to="/" /> : <Loginpage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/signup" element={user? <Navigate to="/" /> : <SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
{/* <div className="App"> */}
      {/* <Home/>  */}
    {/* <Productlist/> */}
    {/* <SingleProduct/> */}
    {/* <SignUp/> */}
    
    {/* <LoginPage/> */}
    {/* <Cart/> */}
    {/* </div> */}