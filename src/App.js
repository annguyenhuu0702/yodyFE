import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomePage from "./container/HomePage/HomePage";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./container/Login/Login";
import Register from "./container/Register/Register";
import { Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
