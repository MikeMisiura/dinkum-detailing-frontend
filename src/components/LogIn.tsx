import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../@types/user';
import UserContext from '../contexts/UserContext';


function LogInForm() {

    // hooks
    const [email, setEmail] = useState<string>("");

    let navigate = useNavigate();

    let { emailUser } = useContext(UserContext);

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();

        let newEmail: IUser = {
            email
        }

        emailUser(newEmail)
        navigate('/')
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} >
                <Form.Label>Email  </Form.Label>
                <Form.Control
                    placeholder="Enter email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Button type="submit">Submit form</Button>
            </Form>
        </div>
    )
};

export default LogInForm;