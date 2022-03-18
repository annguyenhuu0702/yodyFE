import React from "react";
import "./_product.scss";

const Products = (props) => {
  const { products } = props;
  return (
    <div className="container pl-0">
      <div className="row">
        {products?.map((item) => {
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
