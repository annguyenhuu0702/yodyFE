import React from "react";
import "./_navbar.scss";

const NavBar = () => {
  return (
    <div className="header-nav-main container">
      <a href=" " className="logo">
        <img
          src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/logo.svg?1646486842767"
          alt=""
        />
      </a>
      <div className="header-nav">
        <ul className="header-menu">
          <li>
            <a href=" ">NỮ</a>
          </li>
          <li>
            <a href=" ">NAM</a>
          </li>
          <li>
            <a href=" ">TRẺ EM</a>
          </li>
          <li>
            <a href=" ">POLO YODY</a>
          </li>
          <li>
            <a href=" ">BỘ SƯU TẬP</a>
          </li>
          <li>
            <a href=" ">YODY LOVE</a>
          </li>
          <li>
            <a href=" ">ĐỒNG PHỤC</a>
          </li>
        </ul>
      </div>
      <div className="header-search">
        <input
          className="search-text form-control"
          placeholder="Tìm sản phẩm"
        />
        <button className="btn btn-warning btn-search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
