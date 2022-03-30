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
import ChangePageTitle from "../../Components/ChangePageTitle/ChangePageTitle";

const ProductPage = () => {
  const [product, setProduct] = useState();

  const [categories, setCategories] = useState([]);

  const [buyerType, setBuyerType] = useState();

  const params = useParams();

  const products = useSelector((state) => state.product.products);
  const buyertypes = useSelector((state) => state.buyertype.buyertypes);

  const dispatch = useDispatch();

  // gọi api buyertype
  useEffect(() => {
    apiGetAllBuyerType(dispatch);
  }, [dispatch]);

  // lấy sản phẩm theo slug, ví dụ: ao-thun-nam, ao-nam
  useEffect(() => {
    const sortByCategory = async () => {
      await apiGetAllProductByCategorySlug(dispatch, params.productPage);
      dispatch(sortProduct());
    };
    sortByCategory();
  }, [dispatch, params.productPage]);

  // lấy chi tiết sản phẩm
  useEffect(() => {
    const getProductBySlug = async () => {
      const data = await apiProductBySlug(params.productPage);
      setProduct(data);
    };
    getProductBySlug();
  }, [params.productPage]);

  // category truyền qua list cake
  useEffect(() => {
    const result = [];
    buyertypes.forEach((buyertype) => {
      buyertype.groups.forEach((group) => {
        group.categories.forEach((item) => {
          if (item.slug.indexOf(params.productPage) !== -1) {
            result.push(item);
          }
        });
      });
    });
    setCategories(result);
  }, [buyertypes, params.productPage]);

  // cắt chuỗi nam, nữ ở list cake
  useEffect(() => {
    setBuyerType(buyertypes.find((item) => item.slug === params.productPage));
  }, [buyertypes, params.productPage]);

  if (product) {
    return <ProductDetail product={product} />;
  }
  return !buyerType ? (
    <>
      <ChangePageTitle pageTitle={params.productPage} />
      <ProductCategory />
    </>
  ) : (
    <>
      <ChangePageTitle pageTitle={params.productPage} />
      <div className="product-page">
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
          <ListCake categories={categories} buyerType={buyerType} />
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
    </>
  );
};

export default ProductPage;
