import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IMessage } from '../@types/message';
import MessageContext from '../contexts/MessageContext';
import ReCAPTCHA from 'react-google-recaptcha';


function ContactForm() {

    // hooks
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    let navigate = useNavigate();

    // reCAPTCHA
    const reCAPTCHAKey: string = "6LdVAGUnAAAAAAOejCq1K_ei5Gof8dIWtuA0foKI"
    const recaptchaRef = useRef<ReCAPTCHA>(null)



    let { createMessage } = useContext(MessageContext);

    async function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();

        // reCAPTCHA
        let reCaptchaToken = await recaptchaRef.current?.executeAsync()
        recaptchaRef.current?.reset();
        if (!reCaptchaToken) { reCaptchaToken = "no token" }
        localStorage.setItem('reCAPTCHAToken', reCaptchaToken)



        let newMessage: IMessage = {
            email,
            message
        }

        createMessage(newMessage)
        // reCAPTCHA
        localStorage.setItem('reCAPTCHAToken', '')


        navigate('/')
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} >
                <ReCAPTCHA
                    sitekey={reCAPTCHAKey}
                    size="invisible"
                    ref={recaptchaRef}
                />

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