import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../@types/user';
import UserContext from '../contexts/UserContext';

function LogInForm() {

    const [email, setEmail] = useState<string>("");

    let { emailUser } = useContext(UserContext);

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();

        let newEmail: IUser = {
            email
        }

        emailUser(newEmail);
    }

    function CheckEmail(props: any) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
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

    const [modalShow, setModalShow] = React.useState(false);

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
                <>
                    <Button variant="primary" onClick={() => setModalShow(true)} type="submit">
                        Log In
                    </Button>

                    <CheckEmail
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </>
            </Form>
        </div>
    )
};

export default LogInForm;