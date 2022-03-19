import React from "react";
import { useSelector } from "react-redux";
import Products from "../../../Components/Products/Products";
import "./_homeproduct.scss";

const HomeProducts = () => {
  const products = useSelector((state) => state.product.products);

  return (
    <section className="home-product">
      <div className="container pl-0">
        <div className="tabs-title">
          <h2>ĐỀ XUẤT CHO BẠN</h2>
          <div className="title-destop">
            <ul className="title-list">
              <li className="item item-active">Bán chạy nhất </li>
              <li className="item">Thời trang nam</li>
              <li className="item">Thời trang nữ</li>
              <li className="item">Thời trang trẻ em</li>
              <li className="item">Polo YODY</li>
              <li className="item">Quần jeans nữ</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="product">
        <Products products={products} />
      </div>
    </section>
  );
};

export default HomeProducts;
