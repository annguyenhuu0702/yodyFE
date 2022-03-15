import React from "react";
import "./productpage.scss";
import Services from "../../Components/Services/Services";
import Products from "../../Components/Products/Products";
import ListCake from "../../Components/ListCake/ListCake";

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
  // {
  //   id: Math.random(),
  //   img: "https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn3102-xah-phn4000-hog-1.jpg?v=1641958276000",
  //   name: "Áo Phao Nữ Siêu Nhẹ Có Mũ Siêu Ấm",
  //   priceCurrent: "499.000đ",
  //   priceSale: "699.000đ",
  // },
  // {
  //   id: Math.random(),
  //   img: "https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn3102-xah-phn4000-hog-1.jpg?v=1641958276000",
  //   name: "Áo Phao Nữ Siêu Nhẹ Có Mũ Siêu Ấm",
  //   priceCurrent: "499.000đ",
  //   priceSale: "699.000đ",
  // },
];

const ProductPage = () => {
  return (
    <div className="men-page">
      <div className="banner-container">
        <img
          className="w-100"
          src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/page_nam_slider_1.jpg?1647058579726"
          alt=""
        />
      </div>
      <Services />
      <div className="container">
        <div className="title-block">
          <h3>MUA THEO THỂ LOẠI</h3>
        </div>
        <ListCake />
      </div>
      <div className="container pl-0">
        <div className="title-block">
          <h3>MUA THEO PHONG CÁCH</h3>
        </div>
        <div className="banner">
          <div className="col-lg-6">
            <img
              src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/page_nam_banner_1.jpg?1647058579726"
              alt=""
              className="w-100"
            />
          </div>
          <div className="col-lg-6">
            <img
              src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/page_nam_banner_2.jpg?1647058579726"
              alt=""
              className="w-100"
            />
          </div>
        </div>
      </div>
      <Products products={products} />
    </div>
  );
};

export default ProductPage;
