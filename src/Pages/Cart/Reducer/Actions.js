import axios from "axios";
import * as types from "./ActionType";


const productDeleted = (users) => ({
    type: types.REMOVE_CART,
    payload: users,
})






export const deleteUser = (itemId) => {
    return function (dispatch) {
        axios.delete(`https://backend123.azurewebsites.net/infovision/cart?itemId=${itemId}&cartId=dec5ac08-14c2-4d61-bf6a-fc12eaa2597f`).then((resp) => {
            console.log("resp", resp)
            dispatch(productDeleted());
           

        })
            .catch((error) => console.log(error));
    }
};