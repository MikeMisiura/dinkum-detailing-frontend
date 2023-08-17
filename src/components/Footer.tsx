import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import DinkumColors from '../theme/dinkumColors';
import './Footer.css'
import '../Global.css'

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
                    <Row className='center-content m-auto'>
                        <Col
                            xs='12'
                            md='6'
                            lg='5'
                            className='center-content my-auto'
                        >
                            <Navbar.Brand
                                style={{ color: DinkumColors.grey }}
                                className="ms-4"
                                href="/"
                            >
                                <Row className='center-content'>
                                    <Col
                                        className='center-content'
                                        xs='12'
                                        sm="auto"
                                        md='4'
                                    >
                                        <Image
                                            alt="logo"
                                            src='/images/logos/white-logo.png'
                                            width="100"
                                            height="100"
                                            className="d-inline-block align-top"
                                        />
                                    </Col>
                                    <Col
                                        className='center-content'
                                        xs='12'
                                        md="8"
                                    >
                                        <div className='center'>
                                            <h3>Dinkum Detailing</h3>
                                            We come to you near
                                            <br />
                                            Princeton, MN
                                        </div>
                                    </Col>
                                </Row>
                            </Navbar.Brand>
                        </Col>

                        <Col
                            xs='12'
                            md="3"
                            lg='5'
                            className='justify-content-center center my-auto'
                        // style={{justifyContent:center}}
                        >
                            <Button size="lg" className=" myButton" style={{ boxShadow: "none", backgroundColor: "#3888CB", borderColor: "#3888CB" }} href="/estimate">
                                Get a <strong>FREE</strong> Estimate Now
                            </Button>
                        </Col>

                        <Col
                            md="2"
                            lg='2'
                            className='center-content d-none d-md-block my-auto'
                        >
                            <Nav className="me-4 flex-column">
                                <Nav.Link className='nowrap' href="/">Home</Nav.Link>
                                <Nav.Link className='nowrap' href="/about-us">About Us</Nav.Link>
                                <Nav.Link className='nowrap' href="/contact-us">Contact Us</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <Navbar className='px-auto bg-light-blue white' >
                <Container className='center-content'>
                    <Col>
                        <p className='center'>
                            © Copyright 2023 Dinkum Detailing | Created by
                            <a className='hidden-links px-1 nowrap' href='https://www.linkedin.com/in/mike-misiura/'>
                                Mike Misiura
                            </a>
                            and
                            <a className='hidden-links px-1 nowrap' href='https://www.linkedin.com/in/mike-misiura/'>
                                Matt Slater
                            </a>
                        </p>
                    </Col>
                </Container>
            </Navbar >
        </>
    )
}

export default Footer;