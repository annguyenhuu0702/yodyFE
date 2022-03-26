import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiGetAllProduct } from "../../../api/apiProduct";
import Products from "../../../Components/Products/Products";
import { sortProduct } from "../../../Redux/productSlide";
import "./_homeproduct.scss";

const HomeProducts = () => {
  const [visible, setVisible] = useState(10);
  const [idxCategory, setInxCategory] = useState(0);

  const category = [
    "Tất cả",
    "Thời trang nam",
    "Thời trang nữ",
    "Thời trang trẻ em",
    "Polo YODY",
  ];

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
              {category.map((item, index) => {
                return (
                  <li
                    key={item}
                    className={
                      idxCategory === index ? "item item-active" : "item"
                    }
                    onClick={() => setInxCategory(index)}
                  >
                    {item}
                  </li>
                );
              })}
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
