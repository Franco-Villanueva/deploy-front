import { GET_ALL } from "../actionTypes";
import axios from "axios";

export const getAllProducts = () => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(`https://servicie-fixer.onrender.com/products`);
      const productos = apiData.data;

      dispatch({ type: GET_ALL, payload: productos.data });
    } catch (error) {
      return error.message;
    }
  };
};
