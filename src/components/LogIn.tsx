import { Alert, Button, Container, Fade, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import React, { useContext, useState } from 'react';
import './LogIn.css'
import { IUser } from '../@types/user';
import UserContext from '../contexts/UserContext';

function LogInForm() {

    const [email, setEmail] = useState<string>("");

    let { emailUser } = useContext(UserContext);

    const [modalShow, setModalShow] = React.useState(false);

    const [valid, setValid] = useState(true);
    const [notValid, setNotValid] = useState(true);

    function CheckEmail(props: any) {
        setNotValid(true)
        return (
            <Modal
                {...props}
                size="md"
                centered
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton onClick={() => setValid(true)}>
                    <Modal.Title>
                        Check your email to login!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <h6>Didn't get an email?</h6>
                    <Button onClick={handleSubmit}>Resend</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();


        let newEmail: IUser = {
            email
        }

        emailUser(newEmail).then(() => {
            setValid(false)
        }).catch((error: any) => {
            console.log(error);
            setNotValid(false)
        });
    }

    function validateEmail(email: string) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    return (
        <div className="FormContainer">
            <Form onSubmit={handleSubmit} className="Form">
                <div className="FormContent">
                    <h3 className="FormTitle">LOG IN</h3>
                    <div className="mt-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            placeholder="Enter email"
                            type="text"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    {(() => {
                    if (notValid === false) {
                        return (
                            <h6 className="required">Please Enter a Valid Email</h6>
                        )
                    }
                })()}
                    <div className="d-grid gap-2 mt-3">
                        <Button variant="primary" onClick={() => setModalShow(true)} type="submit">
                            Log In
                        </Button>
                    </div>
                </div>
            </Form>
            <div>
                {(() => {
                    if (valid === false && validateEmail(email) === true) {
                        return (
                            <CheckEmail
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        )
                    }
                })()}
            </div>
        </div>
    )
};

export default LogInForm;