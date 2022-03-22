import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiGetAllProduct } from "../../../api/apiProduct";
import Products from "../../../Components/Products/Products";
import { sortProduct } from "../../../Redux/productSlide";
import "./_homeproduct.scss";

const HomeProducts = () => {
  const [visible, setVisible] = useState(10);

  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    const sortByCategory = async () => {
      await apiGetAllProduct(dispatch);
      dispatch(sortProduct());
    };
    sortByCategory();
  }, [dispatch]);

  const showMoreProduct = () => {
    setVisible((pre) => pre + 10);
  };

  return (
    <section className="home-product">
      <div className="container pl-0">
        <div className="tabs-title">
          <h2>ĐỀ XUẤT CHO BẠN</h2>
          <div className="title-destop">
            <ul className="title-list">
              <li className="item item-active">Tất cả </li>
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
        <Products products={products} visible={visible} />
      </div>
      <div className="load-more">
        <button onClick={showMoreProduct}>Xem thêm</button>
      </div>
    </section>
  );
};

export default HomeProducts;
