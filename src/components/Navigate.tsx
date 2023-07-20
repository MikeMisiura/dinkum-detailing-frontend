import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Stack from 'react-bootstrap/Stack'
import { Outlet } from "react-router-dom"
import { Container, Image } from 'react-bootstrap';
import DinkumColors from '../theme/dinkumColors';

function Navigate() {

    return (
        <>
            <Navbar
                style={{
                    backgroundColor: DinkumColors.darkBlue,
                    color: DinkumColors.white
                }}
                variant="dark"
            // expand="lg"
            >
                <Container>
                    <Navbar.Brand
                        style={{ color: DinkumColors.grey }}
                        className="ms-4"
                        href="/"
                    >
                        <Image
                            alt="logo"
                            src='/images/logos/white-logo.png'
                            width="35"
                            height="35"
                            className="d-inline-block align-top"
                        />{' '}
                        Dinkum Detailing
                    </Navbar.Brand>
                </Container>
                <Container style={{ justifyContent: "right" }}>
                    <Nav className="me-4">

                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about-us">About Us</Nav.Link>
                        <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
            <Stack gap={3}>
                <Outlet />
            </Stack>
        </>
    )
}

export default Navigate;