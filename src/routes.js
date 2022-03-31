import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { apiGetAllBuyerType } from "./api/apiBuyerType";
import { apiGetAllGroupCategory } from "./api/apiGroupCategory";
import { apiGetAllCategory } from "./api/category";
import HomePage from "./container/HomePage/HomePage";
import Login from "./container/Login/Login";
import ProductCategory from "./container/ProductCategory/ProductCategory";
import ProductPage from "./container/ProductPage/ProductPage";
import Register from "./container/Register/Register";
import ProductDetail from "./container/ProductDetail/ProductDetail";

const PageRoutes = () => {
  const dispatch = useDispatch();

  const buyertypes = useSelector((state) => state.buyertype.buyertypes);
  const groupCategories = useSelector(
    (state) => state.groupCategory.groupCategory
  );
  const categories = useSelector((state) => state.category.category);

  useEffect(() => {
    apiGetAllBuyerType(dispatch);
    apiGetAllGroupCategory(dispatch);
    apiGetAllCategory(dispatch);
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/account/login" element={<Login />} />
      <Route path="/account/register" element={<Register />} />
      <Route path="/:productDetail" element={<ProductDetail />} />
      {buyertypes.map((item) => {
        return (
          <Route
            path={`/${item.slug}`}
            key={item.id}
            element={<ProductPage buyerType={item} />}
          />
        );
      })}
      {groupCategories.map((item) => {
        return (
          <Route
            path={`/${item.slug}`}
            key={item.id}
            element={<ProductCategory groupCategory={item} />}
          />
        );
      })}
      {categories.map((item) => {
        return (
          <Route
            path={`/${item.slug}`}
            key={item.id}
            element={<ProductCategory category={item} />}
          />
        );
      })}
    </Routes>
  );
};

export default PageRoutes;
