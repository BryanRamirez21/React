import { authReducer } from "../../auth/context/authReducer"
import { types } from "../../auth/types/types";

describe('test on auth', () => {
    test('should return initalState', () => {
        const initalVal = authReducer({logged: false}, {});
        expect(initalVal).toEqual({logged: false});
    })
    
    test('login should call the auth', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'byron',
                id: 123
            }
        };

        const state = authReducer({logged: false}, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload
        });
    });


    test('should logout initalState', () => {
        const state = {
            logged: true,
        };

        const action = {
            type: types.logout
        }

        const newState = authReducer(state, action);

        expect(newState).toEqual({logged: false})

    })
})
