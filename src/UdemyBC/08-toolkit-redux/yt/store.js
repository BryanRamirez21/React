import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";

//1: el "configureStore" le vamos a pasar un objeto, que tendra el reducer, y dentro podemos poner todos los reducer que queramos
export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})