import axios from "axios";
import { configAxios } from "../config/configAxios";
import { URL } from "../constants";
import { addToCart } from "../Redux/cartSlice";

export const apiAddToCart = async (user, dispatch, data) => {
  try {
    const res = await configAxios(user, dispatch).post(`${URL}/v1/cart`, data);
    dispatch(addToCart(res.data));
  } catch (err) {
    console.log(err);
  }
};
