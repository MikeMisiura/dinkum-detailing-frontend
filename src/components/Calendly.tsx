import { useContext, useState } from 'react';
import { InlineWidget } from 'react-calendly'
import EstimateContext from '../contexts/EstimateContext';

function Calendly() {

    const { 
        email,
        seats,
        leather,
        conditioner,
        pets,
        smoke
    } = useContext(EstimateContext)

    const answer1:number = seats - 4
    const a1: string = answer1.toString()

    let a2: string = '1'
    let a3: string = '1'
    let a4: string = '1'
    let a5: string = '1'

    if (!conditioner) {a3 = '2'}
    if (!leather) {
        a2 = '2'
        a3 = '3'
    }
    if (!pets) {a4 = '2'}
    if (!smoke) {a5 = '2'}

    return (
        <div>
            <InlineWidget
                url="https://calendly.com/mikemisiura"
                prefill={{
                    email: email,
                    customAnswers: { a1, a2, a3, a4, a5 }
                }}
                styles={{
                    height: '1000px'
                }}
            />
        </div>
    );
}

export default Calendly