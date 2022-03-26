import axios from "axios";
import { URL } from "../constants";

export const apiGetGroupCategoryBySlug = async (slug) => {
  try {
    const res = await axios.get(`${URL}/v1/groupcategory/slug/${slug}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
