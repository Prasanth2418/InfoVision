import { combineReducers } from "redux";
import MenuItemreducer from "../Pages/MenuPage/Reducer/MenuItemreducer"
const rootReducer = combineReducers({
    data: MenuItemreducer
});

export default rootReducer;