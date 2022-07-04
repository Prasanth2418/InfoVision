import axios from "axios";
import * as types from "./ActionType";




const productAdded = (itemId) => ({
    type: types.UPDATE_USER,
    payload:{
        id:itemId
    }
})

const getProducts = (users) => ({
    type: types.GET_USERS,
    payload: users,
});





export const loadProducts = () => {
    return function (dispatch) {
        axios.get(`https://backend123.azurewebsites.net/infovision/homepageview/menu?foodType=BRAKEFAST&location=Hyderabad`).then((resp) => {
            console.log("resp", resp)
            dispatch(getProducts(resp.data));
          
        })
        .catch((error) => console.log(error));
    };
};


export const AddCart = (data,itemId) => {
    return function (dispatch) {
        axios.post(`https://backend123.azurewebsites.net/infovision/cart?itemId=${itemId}&empId=006e7922-9f53-4dcb-8e56-6c2bc7d32393&quantity=1`).then((resp) => {
            console.log("resp", resp)
            dispatch(productAdded());
            
          
        })
        .catch((error) => console.log(error));
    };
};

