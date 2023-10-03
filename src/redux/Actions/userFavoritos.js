import { FAVORITOS } from "../actionTypes";
import axios from "axios";

export const userFavoritos = (UserId) => {

  try {
    return async (dispatch) => {
      const response = await axios.get(
        `https://servicie-fixer.onrender.com/favorites/${UserId}`
      );
      dispatch({
        type: FAVORITOS,
        payload: response.data,
      });
    };
  } catch (error) {
    const errorResponse = {};
    errorResponse.error = error.message;
    return errorResponse;
  }
};
