import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Button, Col, Container, Image } from 'react-bootstrap';
import DinkumColors from '../theme/dinkumColors';

function Navigate() {

    function logo() {
        return (
            <Image
                alt="logo"
                src='/images/logos/white-logo.png'
                width="35"
                height="35"
                className="d-inline-block align-top"
            />
        )
    }

    return (
        <Navbar
            style={{
                backgroundColor: DinkumColors.darkBlue,
                color: DinkumColors.white
            }}
            variant="dark"
            sticky="top"
            expand="lg"
        >
            <Container>
                <Col xs='2' lg='auto'>
                <Navbar.Brand
                    style={{ color: DinkumColors.grey }}
                    href="/"
                >
                    <span className='d-md-none' >
                            {logo()}{'  '}
                            Dinkum
                        </span>
                        <span className='d-none d-md-inline-block' >
                            {logo()}{'  '}
                            Dinkum Detailing
                        </span>
                    
                </Navbar.Brand>
                </Col>
                <Col xs='4' lg='auto' className="ms-5">
                    <Button className=" myButton" style={{ boxShadow: "none", backgroundColor: "#3888CB", borderColor: "#3888CB" }} href="/estimate">
                        <div className='d-xs-block d-md-none' >
                            <strong>FREE</strong> Estimate
                        </div>
                        <div className=' d-none d-md-block' >
                            Get a <strong>FREE</strong> Estimate Now
                        </div>
                    </Button>
                </Col>
                
                <Col  xs='auto'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                        <>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about-us">About</Nav.Link>
                            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                        </>
                </Nav>
                </Navbar.Collapse>
                </Col>
            </Container>
        </Navbar>
    )
}

export default Navigate;