import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';
import { startLoadingNotes } from '../store/journal/thunks';

export const useAuth = () => {
    const {status} = useSelector(state => state.auth);
    const dipacth = useDispatch();

    //* "necesito usar un efecto, que revise que si la persona esta atutenticada o no"
    //* "este effect necesita hacer una limpieza? NO, pq siempre va a estar pendiente del estado del auth"
    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async(user) => {
            if(!user) return dipacth(logout());

            const {uid, email, displayName, photoURL} = user;
            dipacth(login({uid, email, displayName, photoURL}));
            dipacth(startLoadingNotes());
        });
    },[]);

    return status
}
