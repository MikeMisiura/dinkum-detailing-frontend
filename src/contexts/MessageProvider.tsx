import axios from "axios";
// import UserContext from "./UserContext";
import { IMessage } from "../@types/message";
import MessageContext from "./MessageContext";


export function MessageProvider({ children }: any) {

    const baseUrl = "http://localhost:3000/api/message/";

    function createMessage(message: IMessage) {

        console.log("provider: ")
        console.log(message)

        return

        // return axios.post(baseUrl, message)
        //     .then(response => {
        //         return new Promise(resolve => resolve(response.data));
        //     }
        //     );

    }


    return (
        <MessageContext.Provider value={{
            createMessage
        }}>
            {children}
        </MessageContext.Provider>
    )
}