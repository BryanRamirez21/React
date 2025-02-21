import { logingWithEmailPass, logOutFireBase, registerWithEmailPass, signinWithGoogle } from "../../firebase/providers";
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

export const startLogingWithEmailPass = (email, passsword) => {
    return async(dispatch) => {

        //! missing this on the begginig
        dispatch(checkingCredentials());

        const result = await logingWithEmailPass(email, passsword);
        if(!result.ok) return dispatch(logout({errorMessage: result.errorMessage}));
        

        dispatch(login(result));
        
        
    }
}

export const startLogOut = () => {
    return async(dispatch) => {
        await logOutFireBase();

        dispatch(logout({}));
    }
}