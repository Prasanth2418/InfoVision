import React from 'react'
import * as types from "./ActionType";



const initialState = {
    users: [],
    Requirement: {},
    loading: false,
  };

const MenuItemreducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_USER:
            return {
                ...state,
                loading: false,
              };
    case types.GET_USERS:
        return{
            ...state,
        users: action.payload,
        loading: false,
        }
    default:
        return state;

    }
}

export default MenuItemreducer