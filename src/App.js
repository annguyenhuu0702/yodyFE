import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomePage from "./container/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./container/Login/Login";
import Register from "./container/Register/Register";
import ProductPage from "./container/ProductPage/ProductPage";
import ScrollTop from "./Components/ScrollTop/ScrollTop";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/register" element={<Register />} />
        <Route path="/:productPage" element={<ProductPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
