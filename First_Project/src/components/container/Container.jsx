import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../signin/SignIn";
import localContext from "./localcontext.js";
import Section from "../home/Section.jsx";
import Products from "../products/Products.jsx";
import Profile from "../profile/Profile.jsx";
import ContactUs from "../contactus/ContactUs.jsx";
import SignUp from "../signup/SignUp.jsx";
import ProductDetails from "../productdetails/ProductDetails.jsx";
import CartDetails from "../cart-details/CartDetails.jsx";

function Container() {
  const [isLogin] = useContext(localContext);
  return (
    <div>
      <Routes>
        <Route path={"/"} element={isLogin ? <Section /> : <SignIn />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/contactus"} element={<ContactUs />} />
        <Route path={"/sign-up"} element={<SignUp />} />
        <Route path={"/product-details/:id"} element={<ProductDetails />} />
        <Route path={"/cart-details"} element={<CartDetails />} />
      </Routes>
    </div>
  );
}

export default Container;
