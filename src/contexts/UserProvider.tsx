import axios from "axios";
import UserContext from "./UserContext";
import { backendUrl } from "../environmentVariableTypes";

export function UserProvider({ children }: any) {

    const baseUrl: string = backendUrl + "api/user/"

    function createUser(email: any) {
        let user = { email };

        return axios.post(baseUrl, user)
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function emailUser(email: any) {
        let user = { email };
        console.log(user)
        return axios.post(`${baseUrl}`, user.email)
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }


    function logInUser(token: string) {

        console.log(token)
        localStorage.setItem('myAuthToken', token)

    }

    return (
        <UserContext.Provider value={{
            createUser,
            logInUser,
            emailUser
        }}>
            {children}
        </UserContext.Provider>
    )
}