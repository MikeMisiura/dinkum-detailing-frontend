import axios from "axios";
import { IEstimate } from "../@types/estimate";
import EstimateContext from "./EstimateContext";
import { baseUrl } from "../environmentVariableTypes";


export function EstimateProvider({ children }: any) {

    function createEstimate(Estimate: IEstimate) {
        let myHeaders = {
            reCAPTCHA: `reCAPTCHA ${localStorage.getItem('reCAPTCHAToken')}`
        };

        

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