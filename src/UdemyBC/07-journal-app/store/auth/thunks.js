import { registerWithEmailPass, signinWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, passsword) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
    }
};

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await signinWithGoogle();
        if(!result.ok) return dispatch(result.errorMessage)

        dispatch(login(result))
        
    }
}

export const startCretingUserWithEmailPassword = ({email, password, displayName}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());

        const {ok, uid, photoURL, errorMessage } = await registerWithEmailPass({email, password, displayName});
        console.log(errorMessage);
        if(!ok) return dispatch(logout({errorMessage}));
        

        dispatch(login({uid, displayName, email, photoURL}))
    }
}