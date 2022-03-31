import axios from "axios";
import { URL } from "../constants";
import { getAllGroupCategory } from "../Redux/groupCategory";

export const apiGetGroupCategoryBySlug = async (slug) => {
  try {
    const res = await axios.get(`${URL}/v1/groupcategory/slug/${slug}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const apiGetAllGroupCategory = async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/v1/groupcategory`);
    dispatch(getAllGroupCategory(res.data));
  } catch (err) {
    console.log(err);
  }
};
