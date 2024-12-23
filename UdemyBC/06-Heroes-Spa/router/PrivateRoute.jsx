import React, { useContext } from 'react'
import { AuthContext } from '../auth'
import { Navigate, useLocation } from 'react-router-dom'

// on the "children" we are reciving the components that this component will load
//      that makes it a HOC
export const PrivateRoute = ({children}) => {

    const {authState} = useContext(AuthContext);

    const {pathname, search} = useLocation();
    const lastPath = pathname + search;

    window.localStorage.setItem("lastPath", lastPath);
    console.log("re redner")

    return (authState.logged)
    ? children
    : <Navigate to="/login"/>
}
