import axios from "axios";
import { IEstimate } from "../@types/estimate";
import EstimateContext from "./EstimateContext";


export function EstimateProvider({ children }: any) {

    const baseUrl = "http://localhost:3000/api/estimate/";

    function createEstimate(Estimate: IEstimate) {

        return axios.post(baseUrl, Estimate)
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