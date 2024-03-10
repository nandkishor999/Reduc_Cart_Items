// this is route reducer 
// here we will combine all the reducers and export it 
// and then we will use this reducer in our store ok
import { combineReducers } from 'redux';
import cartItem from './reducer';
export default combineReducers({
    cartItem,
});