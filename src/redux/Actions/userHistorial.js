import { HISTORIAL } from "../actionTypes";
import axios from "axios";

export const userHistorial = (userId) => {
  console.log(userId);
  try {
    return async (dispatch) => {
      const response = await axios.get(`https://servicie-fixer.onrender.com/order/${userId}`);
      dispatch({
        type: HISTORIAL,
        payload: response.data,
      });
    };
  } catch (error) {
    const errorResponse = {};
    errorResponse.error = error.message;
    return errorResponse;
  }
};
