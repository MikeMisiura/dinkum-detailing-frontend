import axios from "axios";
import { IEstimate } from "../@types/estimate";
import EstimateContext from "./EstimateContext";


export function EstimateProvider({ children }: any) {

    const baseUrl = "http://localhost:3000/api/estimate/";

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