import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

// "instancia de la funcion 'GoogleAuthProvider' que vamos a crear"
const googleAuthProvider = new GoogleAuthProvider();

export const signinWithGoogle = async() => {
    //* the try-catch it's used when a callback is likely to fail
    try {

        // nos pide el auth(es la instancia que tenemos desde nuestro codigo de FB) y el proiver(el provider que quiero usar para que aparezca el popup)
        const result = await signInWithPopup(FirebaseAuth, googleAuthProvider);
        //const credential = googleAuthProvider.credentialFromResult(result);
        const {displayName, email, photoURL, uid} = result.user;
        return {
            ok: true,
            displayName, email, photoURL, uid
        }
        
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        return{
            ok: false,
            errorMessage
        }
    }
}

export const registerWithEmailPass = async({email, password, displayName}) => {
    
    //* "Como es una tarea que puede fallar, usamos try-catch"
    try {
        
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = resp.user;
        
        await updateProfile(FirebaseAuth.currentUser, {
            displayName
        });
        
        return {
            ok: true,
            uid, photoURL, email, displayName
        }
    } catch (error) {
        
        
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}

export const logingWithEmailPass = async(remail, passsword) => {
    
    try{
        const result = await signInWithEmailAndPassword(FirebaseAuth, remail, passsword);
        const {displayName, email, photoURL, uid} = result.user;
        return {
            ok: true,
            displayName, email, photoURL, uid
        }
    }catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;

        return{
            ok: false,
            errorMessage
        }
    }
}