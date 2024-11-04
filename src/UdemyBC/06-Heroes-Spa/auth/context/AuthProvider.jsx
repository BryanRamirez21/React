//* "provee la informacion a toda la app"

import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'

//const initialState = {
//    logged:false
//}

export const AuthProvider = ({children}) => {

    const init = () => {
        const user = JSON.parse(window.localStorage.getItem("user"));

        return {
            logged: !!user,
            user: user
        }
    }

    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const onLoggin = (name = "") => {
        const user = { id: 123, name: name }

        const action = {
            type: types.login,
            payload: user
        }

        window.localStorage.setItem("user", JSON.stringify(user))

        dispatch(action);
    }

    const onLogout = () => {
        window.localStorage.removeItem("user")

        const action = {
            type: types.logout,
            payload: ""
        }
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            authState,
            login: onLoggin,
            logout: onLogout
        }}> 
            {children}
        </AuthContext.Provider>
    )
}
