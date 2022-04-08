import { configAxios } from "../config/configAxios";
import { URL } from "../constants";
import { addToCart, getCartByUser } from "../Redux/cartSlice";

export const apiAddToCart = async (user, dispatch, data) => {
  try {
    const res = await configAxios(user, dispatch).post(`${URL}/v1/cart`, data);
    dispatch(addToCart(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const apiGetCartByUser = async (user, dispatch) => {
  try {
    const res = await configAxios(user, dispatch).get(
      `${URL}/v1/cart/userId/${user.id}`
    );
    dispatch(getCartByUser(res.data));
  } catch (err) {
    console.log(err);
  }
};
