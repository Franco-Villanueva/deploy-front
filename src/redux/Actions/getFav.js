import { GET_FAV } from "../actionTypes";
import axios from "axios";

export const getFav = ({ userData }) => {
    try {

        const fav = { UserId: userData.id }

        return async (dispatch) => {
            const response = await axios(`https://servicie-fixer.onrender.com/favorites/${fav.UserId}`);
            console.log(response);
            dispatch({

                type: GET_FAV,
                payload: response.data,

            });
        };
    } catch (error) {
        const errorResponse = {};
        errorResponse.error = error.message;
        return errorResponse;
    }
};

