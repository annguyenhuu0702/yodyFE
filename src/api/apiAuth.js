import axios from "axios";
import { URL } from "../constants";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
  logoutFailed,
  logoutStart,
  logoutSuccess,
} from "../Redux/authSlice";

export const loginUSer = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${URL}/v1/auth/login`, user);
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (err) {
    dispatch(loginFailed(err.response.data));
  }
};

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    const res = await axios.post(`${URL}/v1/auth/register`, user);
    dispatch(registerSuccess(res.data));
    navigate("/account/login");
  } catch (err) {
    dispatch(registerFailed(err.response.data));
  }
};

export const logOut = async (dispatch, navigate) => {
  dispatch(logoutStart());
  try {
    await axios.post(`${URL}/v1/auth/logout`);
    dispatch(logoutSuccess());
    navigate("/");
  } catch (err) {
    dispatch(logoutFailed());
  }
};
