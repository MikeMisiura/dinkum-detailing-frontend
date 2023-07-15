import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Stack from 'react-bootstrap/Stack'
import { Outlet } from "react-router-dom"
import { Container } from 'react-bootstrap';

function Navigate() {

    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand className="ms-4" href="/">Dinkum Detailing</Navbar.Brand>
                </Container>
                <Container style={{ justifyContent: "right" }}>
                    <Nav className="me-4">

                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about-us">About Us</Nav.Link>
                        <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                        <Nav.Link href="/login">login</Nav.Link>

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