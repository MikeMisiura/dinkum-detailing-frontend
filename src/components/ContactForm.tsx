import { Button, Container, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import React, { useContext, useState, useRef } from 'react';
import { IMessage } from '../@types/message';
import MessageContext from '../contexts/MessageContext';
import ReCAPTCHA from 'react-google-recaptcha';
import "./ContactForm.css"
import { ThreeDots } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom';


function ContactForm() {

    // hooks
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    // const [message, setMessage] = useState<string>("");
    const [bot, setBot] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const [modalShow, setModalShow] = React.useState(false);
    const [botModalShow, setBotModalShow] = React.useState(false);

    const [valid, setValid] = useState(true);
    const [notValidEmail, setnotValidEmail] = useState(true);
    const [notValidMessage, setnotValidMessage] = useState(true);

    // reCAPTCHA
    const reCAPTCHAKey: string = "6LdVAGUnAAAAAAOejCq1K_ei5Gof8dIWtuA0foKI"
    const recaptchaRef = useRef<ReCAPTCHA>(null)

    let companyPhoneNumber: string = "(320) 496-6010"
    let companyEmail: string = "dinkumdetailing@gmail.com"

    let { createMessage, message, setMessage } = useContext(MessageContext);

    const navigate = useNavigate();

    function validateEmail(email: string) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function MessageSent(props: any) {
        return (
            <Modal
                {...props}
                size="md"
                centered
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton onClick={() => navigate("/")}>
                    <Modal.Title>
                        Message Sent!
                        <h6>Thanks for Contacting Us!</h6>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer style={{ justifyContent: "center", display: "flex" }}>
                    <Button onClick={() => navigate("/estimate")}>Get a FREE Estimate Now!</Button>
                </Modal.Footer>

            </Modal>
        );
    }

    function BotMessage(props: any) {
        return (
            <Modal
                {...props}
                size="md"
                centered
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton onClick={() => setBot(false)}>
                    <Modal.Title>
                        Message Failed!
                        <h6>
                            reCAPTCHA thinks you are a bot.
                            If you are a human, please call or email us.
                        </h6>
                        <p>(320) 496-6010</p>
                        <p>dinkumdetailing@gmail.com</p>
                        <p>We apologize for the inconvenience.</p>
                    </Modal.Title>
                </Modal.Header>
            </Modal>
        );
    }

    async function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();

        setnotValidEmail(true)
        setnotValidMessage(true)

        // reCAPTCHA
        let reCaptchaToken = await recaptchaRef.current?.executeAsync()
        recaptchaRef.current?.reset();
        if (!reCaptchaToken) { reCaptchaToken = "no token" }
        localStorage.setItem('reCAPTCHAToken', reCaptchaToken)

        let newMessage: IMessage = {
            email,
            phone,
            message
        }

        setLoading(true)

        createMessage(newMessage).then(() => {
            // reCAPTCHA
            localStorage.setItem('reCAPTCHAToken', '')
            setLoading(false)
            setValid(false)
        }).catch((error: any) => {
            // console.log(error);
            // console.log(error.response.status);

            if (error.response.status === 403) {
                setBot(true)
                console.log('we think you are a bot. If you are a human, please call or email us.');
            } else if (email === "" && message === "") {
                setnotValidEmail(false)
                setnotValidMessage(false)
            } else if (validateEmail(email) === false && message === "") {
                setnotValidEmail(false)
                setnotValidMessage(false)
            } else if (email === "" || validateEmail(email) === false) {
                setnotValidEmail(false)
            } else {
                setnotValidMessage(false)
            }
        });
    }

    return (
        <div className="ContactContainer" >
            <Form onSubmit={handleSubmit} className='ContactForm'>
                <ReCAPTCHA
                    sitekey={reCAPTCHAKey}
                    size="invisible"
                    ref={recaptchaRef}
                />

                <div className="FormContent">
                    <h3 className="ContactTitle">CONTACT US</h3>
                    <h5 style={{ textAlign: "center" }}>Thanks for your interest in our services!</h5>
                    <h5 style={{ textAlign: "center" }}>Feel free to call us at {companyPhoneNumber}, email us at {companyEmail}, or fill out the form below.</h5>
                    <div className="mt-3">
                        <Form.Label>Email<span className="required">*</span></Form.Label>
                        <Form.Control
                            placeholder="Enter email"
                            type="text"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        {(() => {
                            if (notValidEmail === false) {
                                return (
                                    <Form.Label className="required">Please Enter a Valid Email</Form.Label>

                                )
                            }
                        })()}

                        <br />

                        <Form.Label>Phone Number  </Form.Label>
                        <Form.Control
                            placeholder="Enter Phone Number (Optional)"
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />

                        <br />

                        <Form.Label>Message<span className="required">*</span></Form.Label>
                        <Form.Control
                            placeholder="Enter message"
                            type="textarea"
                            name="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            as="textarea" rows={3}
                        />
                        {(() => {
                            if (notValidMessage === false) {
                                return (
                                    <Form.Label className="required">Please Enter a Valid Message</Form.Label>
                                )
                            }
                        })()}

                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <Button style={{ backgroundColor: "#3888CB" }} onClick={() => setModalShow(true)} type="submit">Contact Us!</Button>
                    </div>
                </div>
            </Form>
            <Container className='center-content'>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#3888CB"
                ariaLabel="three-dots-loading"
                // wrapperStyle={{}}
                // wrapperClassName=""
                visible={loading}
            />
            </Container>
            <div>
                {(() => {
                    if (valid === false && validateEmail(email) === true) {
                        return (
                            <MessageSent
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        )
                    }
                })()}
                {(() => {
                    if (bot) {
                        return (
                            <BotMessage
                                show={botModalShow}
                                onHide={() => setBotModalShow(false)}
                            />
                        )
                    }
                })()}
            </div>
        </div>
    )
};

export default ContactForm;