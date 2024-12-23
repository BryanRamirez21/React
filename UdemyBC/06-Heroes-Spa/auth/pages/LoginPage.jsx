import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";

export const LoginPage = () => {

    const navigate = useNavigate();
    const {login} = useContext(AuthContext);


    const handleLogin = () => {

        const lastPath = window.localStorage.getItem("lastPath") || '/';

        login("Don bryon");
        
        navigate(lastPath,{
            //? "replace the history" ?
            replace:true
        })
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button className="btn btn-primary" onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}
