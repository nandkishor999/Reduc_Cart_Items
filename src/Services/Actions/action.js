import {ADD_TO_CART,REMOVE_FROM_CART} from '../Constants';
export const AddtoCart = (data) => {
    // console.warn("action", data)
    return {
        type: ADD_TO_CART,
        data: data
    }
}
export const RemovefromCart = (data) => {
      console.warn("action2")
    return {
        type: REMOVE_FROM_CART
        
    }
}