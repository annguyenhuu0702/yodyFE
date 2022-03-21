import React from "react";
import Banner from "./Banner/Banner";
import Services from "../../Components/Services/Services";
import Slide from "./Slider/Slider";
import HomeProducts from "./HomeProduct/HomeProducts";
import TopBar from "../../Components/Header/TopBar";

const HomePage = () => {
  return (
    <div className="home-page">
      <Slide />
      <Services />
      <Banner />
      <HomeProducts />
    </div>
  );
};

export default HomePage;
