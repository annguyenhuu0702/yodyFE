import React, { useEffect, useState } from "react";
import "./_productpage.scss";
import Services from "../../Components/Services/Services";
import Products from "../../Components/Products/Products";
import ListCake from "../../Components/ListCake/ListCake";
import {
  apiGetAllProductByCategorySlug,
  apiProductBySlug,
} from "../../api/apiProduct";
import { useDispatch, useSelector } from "react-redux";
import { apiGetAllBuyerType } from "../../api/apiBuyerType";
import { useParams } from "react-router-dom";
import { sortProduct } from "../../Redux/productSlide";
import ProductCategory from "../ProductCategory/ProductCategory";
import ProductDetail from "../ProductDetail/ProductDetail";

const ProductPage = () => {
  const [product, setProduct] = useState();

  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);
  const buyertypes = useSelector((state) => state.buyertype.buyertypes);

  const params = useParams();

  useEffect(() => {
    apiGetAllBuyerType(dispatch);
  }, [dispatch]);

  useEffect(() => {
    const sortByCategory = async () => {
      await apiGetAllProductByCategorySlug(dispatch, params.productPage);
      dispatch(sortProduct());
    };
    sortByCategory();
  }, [dispatch, params.productPage]);

  useEffect(() => {
    const getProductBySlug = async () => {
      const data = await apiProductBySlug(params.productPage);
      setProduct(data);
    };
    getProductBySlug();
  }, [params.productPage]);

  if (product) {
    return <ProductDetail product={product} />;
  }
  return !buyertypes.find((item) => item.slug === params.productPage) ? (
    <ProductCategory />
  ) : (
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
