import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
    switch(action.type){
        // case types.login === case "[Auth] login"
        case types.login:
            return {
                //* its always useful to do a spread of the obj props, since we dont know
                //*     if the obj will have more props later on
                ...state,

                logged: true,
                user: action.payload
            };

        case types.logout:
            return {
                ...state,
                logged: false,
            };

        default:
            return state;
    }
}