import { SAVE_FAV } from "../actionTypes";
import axios from "axios";

export const crearFavoritos = ({ userData, product }) => {
  try {

    const fav = { UserId: userData.id, ProductId: product.id }
    return async (dispatch) => {
      const response = await axios.post(
        `https://servicie-fixer.onrender.com/favorites/`, fav
      );
      dispatch({
        type: SAVE_FAV,
        payload: response.data,
      });
    };
  } catch (error) {
    const errorResponse = {};
    errorResponse.error = error.message;
    return errorResponse;
  }
};

