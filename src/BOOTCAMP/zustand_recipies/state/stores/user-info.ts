import {create} from "zustand";
import {immer} from "zustand/middleware/immer";

const initalState = {
    userInfo:{
        name: "jhon",
        email: "jhon@mail.com",
        age: 22
    },
    addresess:{
        billing:{
            street: "123 main st",
            city: "town1",
            state: "CA",
            zip: "12345"
        },
        shipping:{
            street: "123 main st",
            city: "town1",
            state: "CA",
            zip: "54321",
            preferences:{
                leaveAtDoor: true,
                deliInstr: "ring at bell"
            }
        },
    },
}

const userInfo = create(immer((set, get) => ({
    ...initalState,
    updateDeliveryInstructions: (instructions: string) => {
        set((state) => {
            state.addresess.shipping.preferences.deliInstr = instructions
        });


        /* CODIGO SIN IMMER
        state.addresess.shipping.preferences.deliInstr = instructions


        CODIGO CON IMMER
        set((state) => ({
            addresess:{
                ...state.addresess,
                shipping: {
                    ...state.addresess.shipping,
                    preferences: {
                        ...state.addresess.shipping.preferences,
                        deliInstr: instructions,
                    },
                },
            },
        }))

        */
    },
})));

export default userInfo;