import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiGetCartByUser } from "../../api/apiCart";
import "./_cartdetail.scss";

const CartDetail = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const carts = useSelector((state) => state.cart.carts);
  console.log(carts);
  const dispatch = useDispatch();
  console.log(user);

  useEffect(() => {
    apiGetCartByUser(user, dispatch);
  }, [dispatch, user]);
  return (
    <div className="cart-detail">
      <div className="container">
        <div className="row">
          <div className="cart-left col-lg-8">
            <div className="cart-title">
              <div>
                <b>Đơn hàng của bạn</b>
                <span className="total-cart"> (1) sản phẩm</span>
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
              <div className="cart-item">
                <div className="item-img">
                  <a href=" ">
                    <img
                      src="https://bizweb.dktcdn.net/thumb/compact/100/438/408/products/apm3635-gre-2.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="item-info">
                  <div className="product-wrap-name">
                    <a href=" " className="info-name">
                      Áo polo nam cafe phối nẹp thấm hút mồ hôi
                    </a>
                    <span className="info-color-size">Grey / M</span>
                    <p className="remove-cart">
                      <i className="fa-solid fa-trash-can"></i>
                      Xóa
                    </p>
                  </div>

                  <div className="cart-price">299.000đ</div>
                  <div className="cart-qtt">
                    <div className="quantity">
                      <button type="button" className="btn-qtt minus">
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <input className="form-control" />
                      <button type="button" className="btn-qtt plus">
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="cart-total-price">299.999đ</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-right col-lg-4">abc</div>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
