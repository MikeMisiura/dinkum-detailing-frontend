import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EstimateContext from '../contexts/EstimateContext';
import { IEstimate } from '../@types/estimate';
import ReCAPTCHA from 'react-google-recaptcha';
import "./EstimateForm.css"
import { Check2, Calendar2Check } from 'react-bootstrap-icons';

function EstimateForm() {

    // hooks
    const [modalShow, setModalShow] = React.useState(false);
    const [valid, setValid] = useState(true);
    const [notValidEmail, setNotValidEmail] = useState(true);

    let { createEstimate,
        email, setEmail,
        seats, setSeats,
        leather, setLeather,
        conditioner, setConditioner,
        pets, setPets,
        smoke, setSmoke,
        price, setPrice
    } = useContext(EstimateContext);

    const navigate = useNavigate();

    // reCAPTCHA
    const reCAPTCHAKey: string = "6LdVAGUnAAAAAAOejCq1K_ei5Gof8dIWtuA0foKI"
    const recaptchaRef = useRef<ReCAPTCHA>(null)

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
                <Modal.Header closeButton onClick={() => setValid(true)}>
                    <Modal.Title>
                        Your Estimate has been Locked In!
                        <h6>Check your email for more info!</h6>
                    </Modal.Title>
                </Modal.Header>
            </Modal>
        );
    }

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

        if (leather === false){
            setConditioner(false)
        }

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

        setModalShow(true)
        setNotValidEmail(true)

        let newEstimate: IEstimate = {
            email, seats, leather, conditioner,
            price, pets, smoke
        }

        createEstimate(newEstimate).then(() => {
            // reCAPTCHA
            localStorage.setItem('reCAPTCHAToken', '')
            setValid(false)
            navigate("/schedule")
        }).catch((error: any) => {
            console.log(error);
            if (email === "" || validateEmail(email) === false) {
                setNotValidEmail(false)
            }
        })
    }

    return (
        <div>
            <Row>



                <Col className="col-sm-8">

                    <Card className="cardEstimate">


                        <h1 className="FormTitle">ESTIMATE</h1>
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



                    </Card>
                </Col>



                <Col>
                <div className="formEstimate">

                            <div className="heading1"><strong><h4>TOTAL ESTIMATE: ${price}</h4></strong></div>
                            <div className="cardAndExpire" style={{ marginTop: "1px" }}>
                                <p>
                                    {seats} Seats
                                    {seats === 5 && " or less"}
                                    {seats === 12 && " or more"}
                                </p>
                            </div>
                            <div className="cardAndExpire">
                                {leather && <p>Leather <Check2 color="green" size={18} /></p>}
                            </div>
                            <div className="cardAndExpire"> {conditioner && leather && <p>Conditioned <Check2 color="green" size={18} /></p>}</div>
                            <div className="cardAndExpire">{pets && <p>Pets <Check2 color="green" size={18} /></p>}</div>
                            <div className="cardAndExpire" style={{ marginBottom: "-30px" }}>{smoke === true && <p>Smoke <Check2 color="green" size={18} /></p>}</div>

                            <div className="emailEstimate">

                                <p className="bodyEstimate"><strong>LOCK IN YOUR ESTIMATE</strong></p>
                                <Form className="review"><Form.Label>Enter your Email to lock in your estimate for 90 days and book your appointment.</Form.Label>
                                <div className="captchaStyle">
                                    <ReCAPTCHA
                                        sitekey={reCAPTCHAKey}
                                        size="invisible"
                                        ref={recaptchaRef}
                                        className="grecaptcha-badge-estimate"
                                    />
                                    </div>
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
                                                <Form.Label className="requiredEstimate">Please Enter a Valid Message</Form.Label>
                                            )
                                        }
                                    })()}
                                </Form>

                                <br />
                            </div>
                            <Link className="purchaseLink" onClick={handleSubmit} style={{ textDecoration: "none" }} to={''}>
                                <div className="cardFooter text-center">
                                    BOOK A DATE
                                </div>
                            </Link>
                            </div>
                </Col>
            </Row>
        </div>
    )
};

export default EstimateForm;