import React from "react";
import "./_product.scss";
const Products = () => {
  const product = [
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
    <div className="container pl-0">
      <div className="row">
        {product.map((item) => {
          return (
            <div className="col-lg-3 product-item" key={item.id}>
              <div className="item-img">
                <a href=" ">
                  <img className="w-100" src={item.img} alt="" />
                </a>
              </div>
              <div className="product-info">
                <div className="name">
                  <a href=" ">{item.name}</a>
                </div>
                <div className="price">
                  <span className="current">{item.priceCurrent}</span>
                  <span className="sale">{item.priceSale}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
