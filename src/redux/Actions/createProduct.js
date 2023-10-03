import {CREATED_PRODUCT, NEW_PRODUCT} from "../actionTypes"
import axios from "axios"


export const createProduct = (product) => {
    try {
        const endpoint = 'https://servicie-fixer.onrender.com/products/'
        return async (dispatch)=> {
            const response = await axios.post(endpoint, product)
            const {data}= response
            const {producto, create} = data
            if (create === true) {
                dispatch({type: NEW_PRODUCT,
                    payload: data})
            }
            else if (create === false) {
                dispatch({
                    type: NEW_PRODUCT,
                    payload: data
                })
            }       
        }
    } 
    catch (error) {
        const errorResponse = {}
        errorResponse.error = error.message
        return errorResponse
    }
}


