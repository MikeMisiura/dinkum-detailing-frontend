import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MessageContext from '../contexts/MessageContext';
import { IMessage } from '../@types/message';


function EstimateForm() {

    // hooks
    const [email, setEmail] = useState<string>("");
    const [seats, setSeats] = useState<number>(5);
    const [leather, setLeather] = useState<boolean>(false);
    const [conditioner, setConditioner] = useState<boolean>(false);
    const [pets, setPets] = useState<boolean>(false);
    const [smoke, setSmoke] = useState<boolean>(false);
    const [estimate, setEstimate] = useState<number>(175);

    let navigate = useNavigate();
    let { createMessage } = useContext(MessageContext);

    useEffect(() => {
        let newEstimate = 175
        if (seats > 5) { newEstimate += (seats - 5) * 5 };
        if (leather) {
            newEstimate += 10
            if (conditioner) { newEstimate += seats * 3 };
        };
        if (pets) { newEstimate += 10 };

        setEstimate(newEstimate)
    }, [seats, leather, conditioner, pets])


    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();

        let newMessage: IMessage = {
            email,
            message: `Total: $${estimate}, Seats: ${seats}, ` + 
                `Pets: ${pets}, Smoking: ${smoke}`
        }

        createMessage(newMessage)
        // navigate('/')
    }

    return (
        <div>

            <Form onSubmit={handleSubmit}>

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

                <h2>Your total estimate is: ${estimate}</h2>

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