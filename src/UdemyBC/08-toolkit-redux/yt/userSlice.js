// "aqui estará la logica del estado de nuestra app"

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const {name, email} = action.payload;
            state.name = name;
            state.email = email;
        },

        changeEmail: (state, action) => {
            //! here i used "action.email"
            state.email = action.payload
        }
    }
});

export const {addUser, changeEmail} = userSlice.actions;
export default userSlice.reducer;