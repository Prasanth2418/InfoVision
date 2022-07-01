import { combineReducers } from "redux";
import MenuItemreducer from "../Pages/MenuPage/Reducer/MenuItemreducer";
import CartItemreducer from "../Pages/Cart/Reducer/CartItemreducer";

const rootReducer = combineReducers({
    data: MenuItemreducer,
    cart: CartItemreducer
});



export default rootReducer;