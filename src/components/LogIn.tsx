import { Button, Modal, Toast } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import React, { useContext, useState } from 'react';
import './LogIn.css'
import { IUser } from '../@types/user';
import UserContext from '../contexts/UserContext';

function LogInForm() {

    const [email, setEmail] = useState<string>("");

    let { emailUser } = useContext(UserContext);

    function CheckEmail(props: any) {
        return (
            <Modal
                {...props}
                size="md"
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

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();


        let newEmail: IUser = {
            email
        }

        emailUser(newEmail).then(() => {

        }).catch((error: any) => {
            console.log(error);
            window.alert("Email Required");
        });
    }

    function validateEmail(email: string) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    return (
        <div className="Form-container">
            <Form onSubmit={handleSubmit} className="Form">
                <div className="Form-content">
                    <h3 className="Form-title">LOG IN</h3>
                    <div className="form-group mt-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            placeholder="Enter email"
                            type="text"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <Button variant="primary" onClick={() => setModalShow(true)} type="submit">
                            Log In
                        </Button>
                    </div>
                </div>
            </Form>
            <div>
                {(() => {
                    if (email != "" && validateEmail(email) === true) {
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