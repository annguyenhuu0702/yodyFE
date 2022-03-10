import React from "react";
import "./_navbar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <section className="header-nav-main container">
      <Link to="/" className="logo">
        <img
          src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/logo.svg?1646486842767"
          alt=""
        />
      </Link>
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
      <div className="nav-main-right">
        <div className="auth">
          <a href=" ">
            <img
              src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/user.svg?1646575637708"
              alt=""
            />
          </a>
          <ul className="header-account">
            <li>
              <Link to="/account/register" className="register">
                Đăng kí
              </Link>
            </li>
            <li>
              <Link to="/account/login" className="login">
                Đăng nhập
              </Link>
            </li>
          </ul>
        </div>
        <div className="cart">
          <a href=" ">
            <img
              src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/cart.svg?1646575637708"
              alt=""
            />
          </a>
          <div className="cart-content">
            <div className="cart-item">
              <img
                src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/blank_cart.svg?1646575637708"
                alt=""
                className="cart-img"
              />
              <p className="cart-message">Giỏ hàng của bạn đang trống</p>
              <a href=" " className="login-cart">
                Đăng nhập/Đăng kí
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
