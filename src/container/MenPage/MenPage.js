import React from "react";
import "./_menpage.scss";
import Services from "../../Components/Services/Services";

const MenPage = () => {
  return (
    <div className="men-page">
      <div className="banner-container">
        <img
          className="w-100"
          src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/page_nam_slider_1.jpg?1647058579726"
          alt=""
        />
      </div>
      <Services />
      <div className="container">
        <div className="tilte-block">
          <h3>MUA THEO PHONG CÁCH</h3>
        </div>
        <div className="banner d-flex mb-5">
          <div className="col-lg-6">
            <img
              src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/page_nam_banner_1.jpg?1647058579726"
              alt=""
              className="w-100"
            />
          </div>
          <div className="col-lg-6">
            <img
              src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/page_nam_banner_2.jpg?1647058579726"
              alt=""
              className="w-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenPage;
