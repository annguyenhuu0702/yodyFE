import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./_productdetail.scss";
import { URL } from "../../constants/index";
import { castToVND, convertSizeStringToNumber } from "../../Common";
import { apiAddToCart } from "../../api/apiCart";
import { useSelector, useDispatch } from "react-redux";
import ChangePageTitle from "../../Components/ChangePageTitle/ChangePageTitle";
import { apiProductBySlug } from "../../api/apiProduct";
import Services from "../../Components/Services/Services";
import { addToCartLocalStorage, showMessage } from "../../Redux/cartSlice";

const ProductDetail = () => {
  const [indexColor, setIndexColor] = useState(0);
  const [indexImage, setIndexImage] = useState(0);
  const [indexSize, setIndexSize] = useState(0);

  const [qtt, setQtt] = useState(1);

  const [product, setProduct] = useState();

  const params = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const message = useSelector((state) => state.cart.message);

  const user = useSelector((state) => state.auth.login.currentUser);

  const cartsLocal = useSelector((state) => state.cart.cartsLocal);
  const carts = useSelector((state) => state.cart.carts);

  useEffect(() => {
    setIndexImage(0);
  }, [indexColor]);

  useEffect(() => {
    const api = async () => {
      let data = await apiProductBySlug(params.productDetail);
      if (data) {
        for (let i = 0; i < data.productColors.length; i++) {
          data.productColors[i].sizes = data.productColors[i].sizes.sort(
            (a, b) =>
              convertSizeStringToNumber(a.size) -
              convertSizeStringToNumber(b.size)
          );
        }
        setProduct(data);
      }
    };
    api();
  }, [params.productDetail]);

  useEffect(() => {
    const checkCart = (user ? carts : cartsLocal).find(
      (item) =>
        item.sizeId === product?.productColors[indexColor].sizes[indexSize].id
    );
    const currentQtt = checkCart ? checkCart.quantity : 0;

    if (
      product &&
      qtt + currentQtt ===
        product.productColors[indexColor].sizes[indexSize].amount + 1
    ) {
      dispatch(showMessage("Số lượng tồn không đủ!"));
    } else if (
      product &&
      qtt + currentQtt <=
        product.productColors[indexColor].sizes[indexSize].amount
    ) {
      dispatch(showMessage(""));
    }
  }, [
    dispatch,
    product,
    indexColor,
    indexSize,
    qtt,
    message,
    cartsLocal,
    user,
    carts,
  ]);

  const handleQtt = () => {};

  const addToCart = (data) => {
    const checkCart = (user ? carts : cartsLocal).find(
      (item) =>
        item.sizeId === product?.productColors[indexColor].sizes[indexSize].id
    );
    const currentQtt = checkCart ? checkCart.quantity : 0;
    if (user) {
      if (
        data.quantity + currentQtt <=
        product.productColors[indexColor].sizes[indexSize].amount
      ) {
        apiAddToCart(user, dispatch, data);
      } else {
        dispatch(showMessage("Số lượng tồn không đủ!"));
      }
    } else {
      if (
        data.quantity + currentQtt <=
        product.productColors[indexColor].sizes[indexSize].amount
      ) {
        dispatch(
          addToCartLocalStorage({
            ...product,
            ...data,
            ...product.productColors[indexColor],
            ...product.productColors[indexColor].sizes[indexSize],
          })
        );
      } else {
        dispatch(showMessage("Số lượng tồn không đủ!"));
      }
    }
  };

  if (!product) return "";
  return (
    <>
      <ChangePageTitle pageTitle={product.name} />
      <div className="product-detail">
        <section className="bread-crumb">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul className="breadcrumbs">
                  <li className="home">
                    <Link to="/">Trang chủ</Link>
                    <span className="mr_lr">&nbsp;/&nbsp;</span>
                  </li>
                  <li>
                    <span>{product.name}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="main-product">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 left">
                <div className="product-detail-img">
                  <div className="small-wrap">
                    {product.productColors[indexColor].images.map(
                      (item, index) => {
                        return (
                          <div
                            key={index}
                            className={
                              indexImage === index
                                ? "small-img active"
                                : "small-img"
                            }
                            onClick={() => {
                              setIndexImage(index);
                            }}
                          >
                            <img src={`${URL + item.image}`} alt="" />
                          </div>
                        );
                      }
                    )}
                  </div>
                  <div className="large-img">
                    <img
                      src={`${
                        URL +
                        product.productColors[indexColor].images[indexImage]
                          .image
                      }`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 right">
                <div className="info-product">
                  <div className="info name">
                    <span>{product.name}</span>
                  </div>
                  <div className="info price">
                    <span>{castToVND(product.newPrice)}</span>
                  </div>
                  <div className="info color">
                    <div className="text-color">
                      <span>
                        Màu sắc: {product.productColors[indexColor].color}
                      </span>
                    </div>
                    <div className="color-img">
                      {product.productColors?.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className={
                              indexColor === index
                                ? "img-wrap active"
                                : "img-wrap"
                            }
                            onClick={() => {
                              setIndexColor(index);
                            }}
                          >
                            <img
                              src={`${URL + item.images[indexImage].image}`}
                              alt=""
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {product.productColors[indexColor].sizes.length > 0 ? (
                    <div className="info size">
                      <div className="text-size">
                        Kích thước: {""}
                        {
                          product.productColors[indexColor].sizes[indexSize]
                            .size
                        }
                      </div>
                      <div className="size-item">
                        {product.productColors[indexColor].sizes.map(
                          (item, index) => {
                            return (
                              <div
                                className={`item ${
                                  item.amount === 0
                                    ? "out-of-stock"
                                    : index === indexSize
                                    ? "active"
                                    : ""
                                }`}
                                key={item.id}
                                onClick={() => setIndexSize(index)}
                              >
                                {item.size}
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="info quantity">
                    <button
                      type="button"
                      className="btn-qtt minus"
                      onClick={() => {
                        setQtt((prev) => {
                          if (qtt <= 1) {
                            return 1;
                          } else {
                            return prev - 1;
                          }
                        });
                      }}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <input
                      className="form-control"
                      value={qtt}
                      onChange={handleQtt}
                    />
                    <button
                      type="button"
                      className="btn-qtt plus"
                      onClick={() => {
                        setQtt((prev) => prev + 1);
                      }}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                  <p className="message-amount">{message}</p>
                </div>
                <div className="add-to-cart">
                  <button
                    type="button"
                    className="btn-add-cart"
                    onClick={() => {
                      addToCart({
                        sizeId:
                          product.productColors[indexColor].sizes[indexSize].id,
                        quantity: qtt,
                        amount:
                          product.productColors[indexColor].sizes[indexSize]
                            .amount,
                      });
                    }}
                  >
                    <i className="fa-solid fa-cart-shopping"></i>
                    Thêm vào giỏ hàng
                  </button>
                  <button
                    type="button"
                    className="btn-add-cart buy-now"
                    onClick={() => {
                      addToCart({
                        sizeId:
                          product.productColors[indexColor].sizes[indexSize].id,
                        quantity: qtt,
                        amount:
                          product.productColors[indexColor].sizes[indexSize]
                            .amount,
                      });
                      navigate("/cart");
                    }}
                  >
                    Muan ngay
                  </button>
                </div>
                <>
                  <Services col={6} />
                </>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetail;
