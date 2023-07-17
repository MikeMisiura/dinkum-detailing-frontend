import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { useParams } from "react-router-dom";

function LoginToken(props: any) {

    let params = useParams()

    // console.log(params)

    let { logInUser } = useContext(UserContext);

    logInUser(params.token)

    return (
        <h1>LoginToken</h1>
    )
}

export default LoginToken;