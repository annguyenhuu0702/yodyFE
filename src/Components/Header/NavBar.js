import React, { useEffect } from "react";
import "./_navbar.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../api/apiAuth";
import { apiGetAllBuyerType } from "../../api/apiBuyerType";

const NavBar = () => {
  const category = [
    { name: "POLY YODY", id: Date.now() + Math.random(), link: "polo-yody" },
    { name: "BỘ SƯU TẬP", id: Date.now() + Math.random(), link: "bo-suu-tap" },
    { name: "YODY LOVE", id: Date.now() + Math.random(), link: "yody-love" },
    { name: "ĐỒNG PHỤC", id: Date.now() + Math.random(), link: "dong-phuc" },
  ];

  const user = useSelector((state) => state.auth.login?.currentUser);
  const buyerType = useSelector((state) => state.buyertype.buyertypes);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut(dispatch, navigate);
  };

  useEffect(() => {
    apiGetAllBuyerType(dispatch);
  }, [dispatch]);
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
          {buyerType.map((item) => {
            return (
              <li className="category" key={item.id}>
                <Link className="nav-name" to={`/${item.slug}`}>
                  {item.name}
                </Link>
                <div className="list-category">
                  <div className="wrap-item d-flex">
                    {item.groups.map((group) => {
                      return (
                        <div className="category-item col-lg-2" key={group.id}>
                          <Link to={`/${group.slug}`} className="title">
                            {group.name.split(item.name.toLowerCase())}
                          </Link>
                          <div className="item">
                            {group.categories.map((category) => {
                              return (
                                <Link
                                  to={`/${category.slug}`}
                                  key={category.id}
                                >
                                  {category.name.split("trẻ em")}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </li>
            );
          })}
          {category.map((item) => {
            return (
              <li className="category" key={item.name}>
                <Link className="nav-name" to={`/${item.link}`}>
                  {item.name}
                </Link>
              </li>
            );
          })}
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
          {user ? (
            <ul className="header-account">
              <li>
                <p>Hi, {`${user.firstName}`}</p>
                <Link
                  to="/account/login"
                  className="logout"
                  onClick={handleLogout}
                >
                  Đăng xuất
                </Link>
              </li>
            </ul>
          ) : (
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
          )}
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
              <Link to="/account/login" className="login-cart">
                Đăng nhập/Đăng kí
              </Link>
            </div>
          </div>
        </div>
        <div className="bars">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
