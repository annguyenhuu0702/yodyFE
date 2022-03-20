import axios from "axios";
import { URL } from "../constants";
import { getAllProduct } from "../Redux/productSlide";

export const apiGetAllProduct = async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/v1/product`);
    dispatch(getAllProduct(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const apiGetAllProductByCategorySlug = async (dispatch, slug) => {
  try {
    const res = await axios.get(`${URL}/v1/product/categorySlug/${slug}`);
    dispatch(getAllProduct(res.data));
  } catch (err) {
    console.log(err);
  }
};
