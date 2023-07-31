import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import DinkumColors from '../theme/dinkumColors';
import './Footer.css'

function Footer() {
    return (
        <>
            <Navbar
                style={{
                    backgroundColor: DinkumColors.darkBlue,
                    color: DinkumColors.white
                }}
                variant="dark"
            >
                <Container>
                    <Col sm="6" md="4" lg="3">
                        <Navbar.Brand
                            style={{ color: DinkumColors.grey }}
                            className="ms-4"
                            href="/"
                        >
                            <Row>
                                <Col sm="auto">
                                    <Image
                                        alt="logo"
                                        src='/images/logos/white-logo.png'
                                        width="100"
                                        height="100"
                                        className="d-inline-block align-top"
                                    />
                                </Col>
                                <Col sm="1">
                                    <h3>Dinkum Detailing</h3>
                                    We come to you near
                                    <br />
                                    Princeton, MN
                                </Col>
                            </Row>
                        </Navbar.Brand>
                    </Col>
                    <Col sm="1" />
                    <Col sm="4">
                        <Button color={DinkumColors.grey} size="lg" className="me-4" href="/estimate">
                            Get a <strong>FREE</strong> Estimate Now
                        </Button>
                    </Col>
                    <Col sm="2">
                        <Nav className="me-4 flex-column " >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about-us">About Us</Nav.Link>
                            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                    </Col>
                </Container>
            </Navbar>
            <Navbar
                style={{
                    backgroundColor: DinkumColors.lightBlue,
                    color: DinkumColors.black
                }}
                className='px-auto'
            >
                <Container className='d-flex justify-content-center'>
                    Copyright 2023 Dinkum Detailing | Created by
                    <a className='hidden-links px-1' href='https://www.linkedin.com/in/mike-misiura/'>
                        Mike Misiura
                    </a>
                    and
                    <a className='hidden-links px-1' href='https://www.linkedin.com/in/mike-misiura/'>
                        Matt Slater
                    </a>
                </Container>
            </Navbar >
        </>
    )
}

export default Footer;