import axios from "axios";
import { IEstimate } from "../@types/estimate";
import EstimateContext from "./EstimateContext";
import { backendUrl } from "../environmentVariableTypes";


export function EstimateProvider({ children }: any) {

    const baseUrl: string = backendUrl + "api/estimate/"

    function createEstimate(Estimate: IEstimate) {
        let myHeaders = {
            reCAPTCHA: `reCAPTCHA ${localStorage.getItem('reCAPTCHAToken')}`
        };

        console.log(baseUrl)

        return axios.post(baseUrl, Estimate, { headers: myHeaders })
            .then(response => {
                
                return new Promise(resolve => resolve(response.data));
            }
            );
    }


    return (
        <EstimateContext.Provider value={{
            createEstimate
        }}>
            {children}
        </EstimateContext.Provider>
    )
}