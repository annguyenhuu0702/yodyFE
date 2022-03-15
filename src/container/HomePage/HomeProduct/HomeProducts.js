import React from "react";
import Products from "../../../Components/Products/Products";
import "./_homeproduct.scss";

const HomeProducts = () => {
  const products = [
    {
      id: Math.random(),
      img: "https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn3102-xah-phn4000-hog-1.jpg?v=1641958276000",
      name: "Áo Phao Nữ Siêu Nhẹ Có Mũ Siêu Ấm",
      priceCurrent: "499.000đ",
      priceSale: "699.000đ",
    },
    {
      id: Math.random(),
      img: "https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apm3299-dml-qjm5037-den-4.jpg?v=1646663806000",
      name: "Áo Phao Nữ Siêu Nhẹ Có Mũ Siêu Ấm",
      priceCurrent: "499.000đ",
      priceSale: "699.000đ",
    },
    {
      id: Math.random(),
      img: "https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn3102-xah-phn4000-hog-1.jpg?v=1641958276000",
      name: "Áo Phao Nữ Siêu Nhẹ Có Mũ Siêu Ấm",
      priceCurrent: "499.000đ",
      priceSale: "699.000đ",
    },
    {
      id: Math.random(),
      img: "https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn3102-xah-phn4000-hog-1.jpg?v=1641958276000",
      name: "Áo Phao Nữ Siêu Nhẹ Có Mũ Siêu Ấm",
      priceCurrent: "499.000đ",
      priceSale: "699.000đ",
    },
    {
      id: Math.random(),
      img: "https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn3102-xah-phn4000-hog-1.jpg?v=1641958276000",
      name: "Áo Phao Nữ Siêu Nhẹ Có Mũ Siêu Ấm",
      priceCurrent: "499.000đ",
      priceSale: "699.000đ",
    },
    {
      id: Math.random(),
      img: "https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn3102-xah-phn4000-hog-1.jpg?v=1641958276000",
      name: "Áo Phao Nữ Siêu Nhẹ Có Mũ Siêu Ấm",
      priceCurrent: "499.000đ",
      priceSale: "699.000đ",
    },
    {
      id: Math.random(),
      img: "https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apm3299-dml-qjm5037-den-4.jpg?v=1646663806000",
      name: "Áo Phao Nữ Siêu Nhẹ Có Mũ Siêu Ấm",
      priceCurrent: "499.000đ",
      priceSale: "699.000đ",
    },
    {
      id: Math.random(),
      img: "https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn3102-xah-phn4000-hog-1.jpg?v=1641958276000",
      name: "Áo Phao Nữ Siêu Nhẹ Có Mũ Siêu Ấm",
      priceCurrent: "499.000đ",
      priceSale: "699.000đ",
    },
    {
      id: Math.random(),
      img: "https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn3102-xah-phn4000-hog-1.jpg?v=1641958276000",
      name: "Áo Phao Nữ Siêu Nhẹ Có Mũ Siêu Ấm",
      priceCurrent: "499.000đ",
      priceSale: "699.000đ",
    },
    {
      id: Math.random(),
      img: "https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn3102-xah-phn4000-hog-1.jpg?v=1641958276000",
      name: "Áo Phao Nữ Siêu Nhẹ Có Mũ Siêu Ấm",
      priceCurrent: "499.000đ",
      priceSale: "699.000đ",
    },
  ];
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
