import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:'auth',
    initialState: {
        status: 'checking', //'checking, not-auth, auth'
        udi: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,

    },
    reducers:{
        login:(state, {payload}) => {
            state.status = 'authenticated', //'checking, not-auth, auth'
            state.udi = payload.udi,
            state.email = payload.email,
            state.displayName = payload.displayName,
            state.photoURL = payload.photoURL,
            state.errorMessage = null
        },
        logout:(state, {payload}) => {
            state.status = 'not authenticated', //'checking, not-auth, auth'
            state.udi = null,
            state.email = null,
            state.displayName = null,
            state.photoURL = null,
            state.errorMessage = payload.errorMessage
        },
        checkingCredentials:(state) => {
            state.status = 'checking'
        }
    }
});

export const {login, logout, checkingCredentials} = authSlice.actions;