import axios from "axios";
import { IEstimate } from "../@types/estimate";
import EstimateContext from "./EstimateContext";
import { backendUrl } from "../environmentVariableTypes";
import { useState } from "react";


export function EstimateProvider({ children }: any) {

    const [email, setEmail] = useState<string>("");
    const [seats, setSeats] = useState<number>(5);
    const [leather, setLeather] = useState<boolean>(false);
    const [conditioner, setConditioner] = useState<boolean>(false);
    const [pets, setPets] = useState<boolean>(false);
    const [smoke, setSmoke] = useState<boolean>(false);
    const [price, setPrice] = useState<number>(175);
    
    const baseUrl: string = backendUrl + "api/estimate/"

    function createEstimate(Estimate: IEstimate) {
        let myHeaders = {
            reCAPTCHA: `reCAPTCHA ${localStorage.getItem('reCAPTCHAToken')}`
        };

        if (Estimate.email) {setEmail(Estimate.email)}

        return axios.post(baseUrl, Estimate, { headers: myHeaders })
            .then(response => {
                
                return new Promise(resolve => resolve(response.data));
            }
            );
    }


    return (
        <EstimateContext.Provider value={{
            createEstimate,
            email, setEmail,
            seats, setSeats,
            leather, setLeather,
            conditioner, setConditioner,
            pets, setPets,
            smoke, setSmoke,
            price, setPrice
        }}>
            {children}
        </EstimateContext.Provider>
    )
}