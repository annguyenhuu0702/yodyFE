import React from "react";
import "./_homepage.scss";
import Header from "../../Components/Header/Header";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import Slide from "./Slider/Slider";
// import Products from "../../Components/Products/Products";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <Slide />
      <Services />
      <Banner />
      {/* <Products /> */}
    </div>
  );
};

export default HomePage;
