import axios from "axios";
// import UserContext from "./UserContext";
import { IMessage } from "../@types/message";
import MessageContext from "./MessageContext";
import { baseUrl } from "../environmentVariableTypes";


export function MessageProvider({ children }: any) {

    function createMessage(message: IMessage) {

        // console.log("provider: ")
        // console.log(message)

        let myHeaders = {
            reCAPTCHA: `reCAPTCHA ${localStorage.getItem('reCAPTCHAToken')}`
        };

        return axios.post(baseUrl, message, { headers: myHeaders })
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }


    return (
        <MessageContext.Provider value={{
            createMessage
        }}>
            {children}
        </MessageContext.Provider>
    )
}