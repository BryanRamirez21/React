import { types } from "../../auth/types/types"

describe('test on types', () => {
    test('should return the types', () => {
        expect(types).toEqual({ login: '[Auth] login', logout: '[Auth] logout' });
    });
    
})
