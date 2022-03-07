import React from "react";
import Header from "../../Components/Header/Header";
import Services from "./Services/Services";
import Slide from "./Slider/Slider";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <Slide />
      <Services />
    </div>
  );
};

export default HomePage;
