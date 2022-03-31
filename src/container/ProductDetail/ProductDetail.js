import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./_productdetail.scss";
import { URL } from "../../constants/index";
import { castToVND, convertSizeStringToNumber } from "../../Common";
import { apiAddToCart } from "../../api/apiCart";
import { useSelector, useDispatch } from "react-redux";
import ChangePageTitle from "../../Components/ChangePageTitle/ChangePageTitle";
import { apiProductBySlug } from "../../api/apiProduct";
import Services from "../../Components/Services/Services";

const ProductDetail = () => {
  const [indexColor, setIndexColor] = useState(0);
  const [indexImage, setIndexImage] = useState(0);
  const [indexSize, setIndexSize] = useState(0);

  const [qtt, setQtt] = useState(1);

  const [product, setProduct] = useState();

  const params = useParams();

  useEffect(() => {
    setIndexImage(0);
  }, [indexColor]);

  useEffect(() => {
    const api = async () => {
      const data = await apiProductBySlug(params.productDetail);
      setProduct(data);
    };
    api();
  }, [params.productDetail]);

  const handleQtt = () => {};

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.login.currentUser);

  const addToCart = (data) => {
    apiAddToCart(user, dispatch, data);
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
                        Kích thước:{" "}
                        {
                          product.productColors[indexColor].sizes[indexSize]
                            .size
                        }
                      </div>
                      <div className="size-item">
                        {(() => {
                          try {
                            product.productColors[indexColor].sizes.sort(
                              (a, b) =>
                                convertSizeStringToNumber(a.size) -
                                convertSizeStringToNumber(b.size)
                            );
                            return product.productColors[indexColor].sizes;
                          } catch (error) {
                            return [];
                          }
                        })().map((item, index) => {
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
                        })}
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
                      });
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
