import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./_cartdetail.scss";
import { castToVND } from "../../Common/index";
import { URL } from "../../constants/index";

const CartDetail = () => {
  const carts = useSelector((state) => state.cart.carts);

  const handleQtt = () => {};

  const totalPrice = () => {
    let total = 0;
    for (let i = 0; i < carts.length; i++) {
      total += carts[i].product.newPrice * carts[i].quantity;
    }
    return total;
  };
  return (
    <div className="cart-detail">
      <div className="container">
        <div className="row">
          <div className="cart-left col-lg-8 col-8">
            <div className="cart-title">
              <div>
                <b>Đơn hàng của bạn</b>
                <span className="total-cart"> ({carts.length}) sản phẩm</span>
              </div>
              <span className="collection-all">
                <a href=" ">
                  Tiếp tục mua hàng <i className="fa-solid fa-arrow-right"></i>
                </a>
              </span>
            </div>
            <div className="cart-info">
              <div>Sản phẩm</div>
              <div>Đơn giá</div>
              <div>Số lượng</div>
              <div>Thành tiền</div>
            </div>
            <div className="item-wrapper">
              {carts.map((item) => {
                console.log(item);
                return (
                  <div className="cart-item" key={item.id}>
                    <div className="info-left">
                      <Link to={`/${item.product.slug}`} className="item-img">
                        <img
                          src={`${URL}${item.product.images[0].image}`}
                          alt=" "
                        />
                      </Link>
                      <div className="product-wrap-name">
                        <div className="wrap-name-color">
                          <Link
                            to={`/${item.product.slug}`}
                            className="info-name"
                          >
                            {item.product.name}
                          </Link>
                          <span className="info-color-size">
                            {item.product.color} / {item.size.size}
                          </span>
                        </div>
                        <p className="remove-cart">
                          <i className="fa-solid fa-trash-can"></i>
                          Xóa
                        </p>
                      </div>
                    </div>
                    <div className="info-right cart-price">
                      {castToVND(item.product.newPrice)}
                    </div>
                    <div className="info-right cart-qtt">
                      <div className="quantity">
                        <button type="button" className="btn-qtt minus">
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <input
                          className="form-control"
                          value={item.quantity}
                          onChange={() => handleQtt()}
                        />
                        <button type="button" className="btn-qtt plus">
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <div className="info-right cart-total-price">
                      {castToVND(item.quantity * item.product.newPrice)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="cart-right col-lg-4 col-4">
            <div className="cart-tile">
              <span className="subs">Tổng cộng: </span>
              <span className="total-price">{castToVND(totalPrice())}</span>
            </div>
            <div className="payment">
              <button className="btn-payment">
                Thanh toán ({carts.length})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
