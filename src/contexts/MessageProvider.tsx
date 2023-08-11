import axios from "axios";
// import UserContext from "./UserContext";
import { IMessage } from "../@types/message";
import MessageContext from "./MessageContext";
import { useEffect, useState } from "react";
import { backendUrl } from "../environmentVariableTypes";


export function MessageProvider({ children }: any) {

    const [message, setMessage] = useState([]);
    const baseUrl: string = backendUrl + "api/messages/"

    useEffect(() => {
        async function fetchData() {
            await getAllMessages();
        }
        fetchData();
    }, []);

    function getAllMessages() {
        return axios.get(baseUrl).then(response => setMessage(response.data));
    }

    function createMessage(message: IMessage) {

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
            message,
            getAllMessages,
            createMessage
        }}>
            {children}
        </MessageContext.Provider>
    )
}