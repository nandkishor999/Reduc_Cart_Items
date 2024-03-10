import {ADD_TO_CART,REMOVE_FROM_CART} from '../Constants';

const initialState = {
    carddata: []
}
export default function cartItem(state=[], action){
   switch(action.type){
        case ADD_TO_CART:
            // console.log('reducer', action)
            return [
                ...state,
               { carddata: action.data}
            ]
          case  REMOVE_FROM_CART:
                 state.pop();
                return [
                    ...state
                ]
         
        
        default:
            return state;
        }
}

