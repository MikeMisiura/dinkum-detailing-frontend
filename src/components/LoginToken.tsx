import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { useParams } from "react-router-dom";
import Home from "../pages/HomePage";
import { Toast } from "react-bootstrap";

function LoginToken(props: any) {

    let params = useParams()

    // console.log(params)

    let { logInUser } = useContext(UserContext);

    logInUser(params.token)

    return (
        <>
        <Home/>
        
        </>
    )
}

export default LoginToken;