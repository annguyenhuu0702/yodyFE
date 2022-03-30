import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiGetAllProductByCategorySlug } from "../../api/apiProduct";
import Products from "../../Components/Products/Products";
import { sortProduct } from "../../Redux/productSlide";
import "./_productcategory.scss";

const ProductCategory = () => {
  const [sort, setSort] = useState("Mặc định");

  const [toogle, setToogle] = useState({
    color: false,
    size: false,
    price: false,
  });

  const [visible, setVisible] = useState(8);

  const options = [
    "Mặc định",
    "Tên A-Z",
    "Tên Z-A",
    "Giá giảm dần",
    "Giá tăng dần",
  ];

  const colors = [
    {
      color: "Xanh navy",
      colorCode: "#03204C",
    },
    {
      color: "Đen",
      colorCode: "#000000",
    },
    {
      color: "Xanh lá",
      colorCode: "#62BF5E",
    },
    {
      color: "Nâu",
      colorCode: "#613B0D",
    },
    {
      color: "Mint",
      colorCode: "#8CD6C4",
    },
    {
      color: "Xám",
      colorCode: "#C1C5C0",
    },
    {
      color: "Đỏ ",
      colorCode: "#F10008",
    },
    {
      color: "Xanh",
      colorCode: "#6BBBDD",
    },
    {
      color: "Tím than",
      colorCode: "#321B3B",
    },
    {
      color: "Vàng",
      colorCode: "#EFE159",
    },
    {
      color: "Trắng",
      colorCode: "#FFFFFF",
    },
    {
      color: "Hồng",
      colorCode: "#DC85AC",
    },
    {
      color: "Be",
      colorCode: "#E3CCB5",
    },
    {
      color: "Cam",
      colorCode: "#F19F00",
    },
    {
      color: "Tím ",
      colorCode: "#C48FE2",
    },
    {
      color: "Xanh cổ vịt",
      colorCode: "#00867D",
    },
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"];

  const color = useRef();

  const dispatch = useDispatch();

  const products = useSelector((state) => state.product?.products);

  // sản phẩm theo category slug, group category slug
  useEffect(() => {
    apiGetAllProductByCategorySlug(dispatch);
  }, [dispatch]);

  const handleSort = (sort) => {
    dispatch(sortProduct(sort));
    setSort(sort);
  };

  const handleLoadMore = () => {
    setVisible((prev) => {
      if (prev === 8) {
        prev = colors.length;
      } else {
        prev = 8;
      }
      return prev;
    });
  };

  const handleMoseEnter = (target, colorCode) => {
    color.current = target;
    target.style.border = `1px solid ${colorCode}`;
  };

  const handleMouseLeave = () => {
    color.current.style.border = `1px solid transparent`;
  };

  // const renderColor = () => {
  //   const result = [];
  //   products.forEach((productColor) => {
  //     productColor.productColors.forEach((color) => {
  //       if (!result.find((item) => item.color === color.color)) {
  //         result.push(color);
  //       }
  //     });
  //   });
  //   return result.map((item, index) => {
  //     return (
  //       <li className="filter-item" key={index}>
  //         <input type="checkbox" name="" defaultValue="" hidden />
  //         <span>
  //           <i style={{ background: item.colorCode }}></i>
  //           {item.color}
  //         </span>
  //       </li>
  //     );
  //   });
  // };

  // const renderSize = () => {
  //   const result = [];
  //   products.forEach((productColor) => {
  //     productColor.productColors.forEach((sizes) => {
  //       sizes.sizes.forEach((size) => {
  //         if (!result.find((item) => item.size === size.size)) {
  //           result.push(size);
  //         }
  //       });
  //     });
  //   });
  //   result.sort(
  //     (a, b) =>
  //       convertSizeStringToNumber(a.size) - convertSizeStringToNumber(b.size)
  //   );
  //   return result.map((item, index) => {
  //     return (
  //       <li className="filter-item" key={index}>
  //         <input type="checkbox" name="" defaultValue="" hidden />
  //         <span>{item.size}</span>
  //       </li>
  //     );
  //   });
  // };

  return (
    <div className="product-category">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 left">
            <div className="filter">
              <div className="filter-color">
                <div className="title">
                  <h3>Màu sắc</h3>
                  <div
                    onClick={() => {
                      setToogle({ ...toogle, color: !toogle.color });
                    }}
                  >
                    {toogle.color ? (
                      <i className="fa-solid fa-arrow-up"></i>
                    ) : (
                      <i className="fa-solid fa-arrow-down"></i>
                    )}
                  </div>
                </div>
                <div className="color">
                  <ul
                    className={`list-item list-color ${
                      toogle.color ? "hidden" : ""
                    }`}
                  >
                    {colors &&
                      colors.length > 0 &&
                      colors.slice(0, visible).map((item) => {
                        return (
                          <li
                            className="filter-item"
                            key={item.color}
                            ref={color}
                            onMouseEnter={(e) =>
                              handleMoseEnter(e.target, item.colorCode)
                            }
                            onMouseLeave={() => handleMouseLeave()}
                          >
                            <input
                              type="checkbox"
                              name=""
                              defaultValue=""
                              hidden
                            />
                            <span>
                              <i
                                style={{
                                  backgroundColor: item.colorCode,
                                }}
                              ></i>
                              {item.color}
                            </span>
                          </li>
                        );
                      })}
                  </ul>
                  {colors.length <= 8 ? (
                    ""
                  ) : (
                    <span
                      className="visible"
                      onClick={() => {
                        handleLoadMore();
                      }}
                    >
                      {visible <= 8 ? "Xem thêm" : "Thu gọn"}
                    </span>
                  )}
                </div>
              </div>
              <div className="filter-size">
                <div className="title">
                  <h3>Kích thước</h3>
                  <div
                    onClick={() => {
                      setToogle({ ...toogle, size: !toogle.size });
                    }}
                  >
                    {toogle.size ? (
                      <i className="fa-solid fa-arrow-up"></i>
                    ) : (
                      <i className="fa-solid fa-arrow-down"></i>
                    )}
                  </div>
                </div>
                <div className="size">
                  <ul
                    className={`list-item list-size ${
                      toogle.size ? "hidden" : ""
                    }`}
                  >
                    {sizes &&
                      sizes.length > 0 &&
                      sizes.map((item) => {
                        return (
                          <li className="filter-item" key={item}>
                            <input
                              type="checkbox"
                              name=""
                              defaultValue=""
                              hidden
                            />
                            <span>{item}</span>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
              <div className="filter-price">
                <div className="title">
                  <h3>Khoảng giá (VNĐ)</h3>
                  <div
                    onClick={() => {
                      setToogle({ ...toogle, price: !toogle.price });
                    }}
                  >
                    {toogle.price ? (
                      <i className="fa-solid fa-arrow-up"></i>
                    ) : (
                      <i className="fa-solid fa-arrow-down"></i>
                    )}
                  </div>
                </div>
                <div className="price">
                  <ul
                    className={`list-item list-price ${
                      toogle.price ? "hidden" : ""
                    }`}
                  >
                    <li className="filter-item">
                      <input type="checkbox" name="" defaultValue="" />
                      <span>Nhỏ hơn 100.000đ</span>
                    </li>
                    <li className="filter-item">
                      <input type="checkbox" name="" defaultValue="" />
                      <span>Từ 100.000đ - 300.000đ</span>
                    </li>
                    <li className="filter-item">
                      <input type="checkbox" name="" defaultValue="" />
                      <span>Từ 300.000đ - 500.000đ</span>
                    </li>
                    <li className="filter-item">
                      <input type="checkbox" name="" defaultValue="" />
                      <span>Từ 500.000đ - 700.000đ</span>
                    </li>
                    <li className="filter-item">
                      <input type="checkbox" name="" defaultValue="" />
                      <span>Lớn hơn 700.000đ</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 right">
            <div className="section-sort">
              <span className="count">
                {products.length > 0
                  ? `${products.length} sản phẩm`
                  : "Sản phẩm đang được cập nhật .........."}
              </span>
              <div className="sort">
                <div className="form-group d-flex">
                  <div className="hover-sort">
                    Sắp xếp theo
                    <span>
                      {sort}
                      <i className="fa-solid fa-check"></i>
                    </span>
                  </div>
                  <ul className="list-sort">
                    {options.length > 0 &&
                      options.map((item) => {
                        return (
                          <li
                            key={item}
                            onClick={() => {
                              handleSort(item);
                            }}
                          >
                            <span>
                              {item}
                              {item === sort ? (
                                <i className="fa-solid fa-check"></i>
                              ) : (
                                ""
                              )}
                            </span>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
            <Products products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
