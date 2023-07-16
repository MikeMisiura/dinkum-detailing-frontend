import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IMessage } from '../@types/message';
import MessageContext from '../contexts/MessageContext';


function ContactForm() {

    // hooks
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    let navigate = useNavigate();

    let { createMessage } = useContext(MessageContext);

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();

        let newMessage: IMessage = {
            email,
            message
        }

        createMessage(newMessage)
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
                <Form.Label>Message  </Form.Label>
                <Form.Control
                    placeholder="Enter message"
                    type="textarea"
                    name="message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    as="textarea" rows={3} 
                />
                <Button type="submit">Submit form</Button>
            </Form>
        </div>
    )
};

export default ContactForm;