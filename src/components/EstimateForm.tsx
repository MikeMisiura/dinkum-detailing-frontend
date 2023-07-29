import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EstimateContext from '../contexts/EstimateContext';
import { IEstimate } from '../@types/estimate';
import ReCAPTCHA from 'react-google-recaptcha';


function EstimateForm() {

    // hooks
    const [email, setEmail] = useState<string>("");
    const [seats, setSeats] = useState<number>(5);
    const [leather, setLeather] = useState<boolean>(false);
    const [conditioner, setConditioner] = useState<boolean>(false);
    const [pets, setPets] = useState<boolean>(false);
    const [smoke, setSmoke] = useState<boolean>(false);
    const [price, setPrice] = useState<number>(175);

    let navigate = useNavigate();
    let { createEstimate } = useContext(EstimateContext);

    // reCAPTCHA
    const reCAPTCHAKey: string = "6LdVAGUnAAAAAAOejCq1K_ei5Gof8dIWtuA0foKI"
    const recaptchaRef = useRef<ReCAPTCHA>(null)


    // --------Pricing----------
    useEffect(() => {
        let newEstimatePrice = 125
        if (seats > 5) { newEstimatePrice += (seats - 5) * 5 };
        if (leather) {
            newEstimatePrice += 10
            if (conditioner) { newEstimatePrice += seats * 3 };
        };
        if (pets) { newEstimatePrice += 10 };
        if (smoke) { newEstimatePrice += 10 };

        setPrice(newEstimatePrice)
    }, [seats, leather, conditioner, pets, smoke])
    // --------Pricing----------

    async function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();

        // reCAPTCHA
        let reCaptchaToken = await recaptchaRef.current?.executeAsync()
        recaptchaRef.current?.reset();
        if (!reCaptchaToken) { reCaptchaToken = "no token" }
        localStorage.setItem('reCAPTCHAToken', reCaptchaToken)

        let newEstimate: IEstimate = {
            email, seats, leather, conditioner,
            price, pets, smoke
        }

        createEstimate(newEstimate)

        // reCAPTCHA
        localStorage.setItem('reCAPTCHAToken', '')

        navigate('/')
    }

    return (
        <div>

            <Form onSubmit={handleSubmit}>

                <ReCAPTCHA
                    sitekey={reCAPTCHAKey}
                    size="invisible"
                    ref={recaptchaRef}
                />

                <Form.Label>Number of Seats</Form.Label>
                <Form.Range
                    name="seats"
                    value={seats}
                    onChange={e => setSeats(parseInt(e.target.value))}
                    min="5"
                    max="12"
                />
                <Form.Label>
                    {seats}
                    {seats === 5 && " or less"}
                    {seats === 12 && " or more"}
                </Form.Label>

                <Form.Check
                    type="switch"
                    label="Does you vehicle have Leather Seats?"
                    name="leather"
                    checked={leather}
                    onChange={e => setLeather(e.target.checked)}
                    as="input"
                />

                <Form.Check
                    disabled={!leather}
                    type="switch"
                    label="Do you want your Leather Seats Conditioned?"
                    name="conditioner"
                    checked={conditioner}
                    onChange={e => setConditioner(e.target.checked)}
                    as="input"
                />

                <Form.Check
                    type="switch"
                    label="Are pets regularly in the vehicle?"
                    name="pets"
                    checked={pets}
                    onChange={e => setPets(e.target.checked)}
                    as="input"
                />

                <Form.Check
                    type="switch"
                    label="Do you smoke in the vehicle?"
                    name="smoke"
                    checked={smoke}
                    onChange={e => setSmoke(e.target.checked)}
                    as="input"
                />
                {smoke && <p>Due to the pervasiveness of smoke, we may not get all of the smoke smell out of your vehicle.</p>}

                <h2>Your total estimate is: ${price}</h2>

                <Form.Label>Enter your Email to lock in your estimate for 90 days!</Form.Label>
                <Form.Control
                    placeholder="Enter email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Button
                    disabled={!email}
                    type="submit"
                >Submit form</Button>

            </Form>
        </div>
    )
};

export default EstimateForm;