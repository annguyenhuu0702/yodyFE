import React, { useEffect, useState } from "react";
import Products from "../../Components/Products/Products";
import "./_productcategory.scss";
import { useDispatch, useSelector } from "react-redux";
import { apiGetAllProductByCategorySlug } from "../../api/apiProduct";
import { sortProduct } from "../../Redux/productSlide";

const ProductCategory = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    apiGetAllProductByCategorySlug(dispatch);
  }, [dispatch]);

  const [sort, setSort] = useState("Mặc định");
  const options = [
    "Mặc định",
    "Tên A-Z",
    "Tên Z-A",
    "Giá giảm dần",
    "Giá tăng dần",
  ];

  useEffect(() => {
    dispatch(sortProduct(sort));
  }, [sort, dispatch]);

  return (
    <div className="product-category">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 left">
            <div className="filter">
              <div className="filter-color">
                <div className="title">
                  <h3>Màu sắc</h3>
                  <i className="fa-solid fa-arrow-up"></i>
                  {/* <i className="fa-solid fa-arrow-down"></i> */}
                </div>
                <div className="color">
                  <ul className="list-item list-color">
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
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div className="size">
                  <ul className="list-item list-size">
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
                  <i className="fa-solid fa-arrow-up"></i>
                  {/* <i className="fa-solid fa-arrow-down"></i> */}
                </div>
                <div className="price">
                  <ul className="list-item list-price">
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
                  <label>Sắp xếp theo</label>
                  <select
                    className="form-control form-control-sort"
                    name="sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                  >
                    {options.length > 0 &&
                      options.map((item, index) => {
                        return (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        );
                      })}
                  </select>
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
