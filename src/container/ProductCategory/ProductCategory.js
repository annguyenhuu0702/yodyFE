import React, { useEffect, useState } from "react";
import Products from "../../Components/Products/Products";
import "./_productcategory.scss";
import { useDispatch, useSelector } from "react-redux";
import { apiGetAllProductByCategorySlug } from "../../api/apiProduct";
import { sortProduct } from "../../Redux/productSlide";

const ProductCategory = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product?.products);

  useEffect(() => {
    apiGetAllProductByCategorySlug(dispatch);
  }, [dispatch]);

  const [sort, setSort] = useState("Mặc định");

  const [toogle, setToogle] = useState({
    color: false,
    size: false,
    price: false,
  });

  const options = [
    "Mặc định",
    "Tên A-Z",
    "Tên Z-A",
    "Giá giảm dần",
    "Giá tăng dần",
  ];

  const handleSort = (sort) => {
    dispatch(sortProduct(sort));
    setSort(sort);
  };

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
                    <li className="filter-item">
                      <input type="checkbox" name="" defaultValue="" hidden />
                      <span>
                        <i></i>
                        Đen
                      </span>
                    </li>
                    <li className="filter-item">
                      <input type="checkbox" name="" defaultValue="" hidden />
                      <span>
                        <i></i>
                        Trắng
                      </span>
                    </li>
                    <li className="filter-item">
                      <input type="checkbox" name="" defaultValue="" hidden />
                      <span>
                        <i></i>
                        Đen
                      </span>
                    </li>
                    <li className="filter-item">
                      <input type="checkbox" name="" defaultValue="" hidden />
                      <span>
                        <i></i>
                        Xanh navy
                      </span>
                    </li>
                    <li className="filter-item">
                      <input type="checkbox" name="" defaultValue="" hidden />
                      <span>
                        <i></i>
                        Đen
                      </span>
                    </li>
                    <li className="filter-item">
                      <input type="checkbox" name="" defaultValue="" hidden />
                      <span>
                        <i></i>
                        Trắng
                      </span>
                    </li>
                    <li className="filter-item">
                      <input type="checkbox" name="" defaultValue="" hidden />
                      <span>
                        <i></i>
                        Đen
                      </span>
                    </li>
                    <li className="filter-item">
                      <input type="checkbox" name="" defaultValue="" hidden />
                      <span>
                        <i></i>
                        Trắng
                      </span>
                    </li>
                  </ul>
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
                    className={`list-item list-color ${
                      toogle.size ? "hidden" : ""
                    }`}
                  >
                    <li className="filter-item">
                      <input type="checkbox" name="" defaultValue="" hidden />
                      <span>S</span>
                    </li>
                    <li className="filter-item">
                      <input type="checkbox" name="" defaultValue="" hidden />
                      <span>M</span>
                    </li>
                    <li className="filter-item">
                      <input type="checkbox" name="" defaultValue="" hidden />
                      <span>L</span>
                    </li>
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
                      <span>Lớn hơn 300.000đ</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 right">
            <div className="section-sort">
              <span className="count">{products.length} sản phẩm</span>
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
