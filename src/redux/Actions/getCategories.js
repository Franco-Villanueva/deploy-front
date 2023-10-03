import { GET_CATEGORIES } from "../actionTypes";
import axios from "axios";

export const getCategories = () => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(`https://servicie-fixer.onrender.com/categories`);
      const categorias = apiData.data;
      dispatch({ type: GET_CATEGORIES, payload: categorias });
    } catch (error) {
      return error.message;
    }
  };
};
