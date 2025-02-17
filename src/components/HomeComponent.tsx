import { Badge, Button, Card, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import './HomeComponent.css'
import '../Global.css'
import { ArrowRightCircle, Facebook, Google, TelephoneFill, EnvelopeFill } from "react-bootstrap-icons";

function HomeComponent() {

    return (
        <>
            <div className='d-xs-block d-md-none' >
            <img
                alt="logo"
                src='/images/logos/logo.png'
                width="75"
                height="75"
                className="align-top"
                style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
            />
                <h1 style={{ textAlign: "center", fontFamily: 'Rubik', fontSize: "50px", textShadow: "2px 2px 4px #000000" }}>DINKUM DETAILING</h1>
                <h1 style={{ textAlign: "center", fontFamily: 'Rubik', fontSize: "20px", textShadow: "1px 2px 3px #000000", marginBottom: "40px" }}>MOBILE INTERIOR DETAILING BUSINESS</h1>
            </div>
            <div className=' d-none d-md-block' >
            <img
                alt="logo"
                src='/images/logos/logo.png'
                width="150"
                height="150"
                className="align-top"
                style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
            />

                <h1 style={{ textAlign: "center", fontFamily: 'Rubik', fontSize: "100px", textShadow: "2px 2px 4px #000000" }}>DINKUM DETAILING</h1>
                <h1 style={{ textAlign: "center", fontFamily: 'Rubik', fontSize: "30px", textShadow: "1px 2px 3px #000000", marginBottom: "40px" }}>MOBILE INTERIOR DETAILING BUSINESS</h1>
            </div>


            <div className='d-xs-block d-md-none' >
                <Container className="center-content">
                    <Col xs="12" md='10' lg='8' xl='7'>
                        <Card className="cardHome" style={{ width: "110%", right: "4%" }}>
                            <Carousel controls={false} interval={3000}>
                                <Carousel.Item>
                                    <Image
                                        src="/images/console-before-after.jpg"
                                        fluid
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        src="/images/we-come-to-you.jpg"
                                        fluid
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Card>
                    </Col>
                </Container>
            </div>
            <div className='d-none d-md-block' >
                <Container className="center-content">
                    <Col xs="12" md='10' lg='8' xl='7'>
                        <Card className="cardHome" style={{ width: "150%", right: "25%" }}>
                            <Carousel controls={false} interval={3000}>
                                <Carousel.Item>
                                    <Image
                                        src="/images/console-before-after.jpg"
                                        fluid
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        src="/images/we-come-to-you.jpg"
                                        fluid
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Card>
                    </Col>
                </Container>
            </div>



            <br />

            <div className='d-xs-block d-md-none' >
                <h1 className="homeTitle" style={{ fontSize: "40px" }}>SERVICES</h1>
            </div>
            <div className='d-none d-md-block' >
                <h1 className="homeTitle" style={{ fontSize: "50px" }}>SERVICES</h1>
            </div>

            <Container className="center-content">
                <Row className="center-content">
                    <Col xs="12" sm="12" md="12" lg="4" className="my-2">
                        <Card className="cardHome">
                            <Card.Img variant="top" src="/images/services/basic.jpg" />
                            <Card.Body>
                                <Card.Title>Basic Detailing <Badge bg="secondary">Most Popular</Badge></Card.Title>
                                <Card.Text>
                                    A Basic Detail includes a detailed vacuuming of carpets and seats,
                                    cleaning of all vinyl, plastic, windows, and leather.
                                    <br />
                                    We come to you (within 20 miles of Princeton, MN,)
                                    and require an electric outlet within 50ft of your car.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs="12" sm="12" md="12" lg="4" className="my-2">
                        <Card className="cardHome">
                            <Card.Img variant="top" src="/images/services/boat.jpg" />
                            <Card.Body>
                                <Card.Title>Boat Interior</Card.Title>
                                <Card.Text>
                                    We will clean the interior of your watercraft. Seats, carpet,
                                    cup holders and more. This service is priced the same as Basic Detailing.
                                    <br />
                                    We come to you (within 20 miles of Princeton, MN,)
                                    and require an electric outlet within 50ft of your boat.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs="12" sm="12" md="12" lg="4" className="my-2">
                        <Card className="cardHome">
                            <Card.Img variant="top" src="/images/services/shampoo.jpg" />
                            <Card.Body>
                                <Card.Title>Shampooing</Card.Title>
                                <Card.Text>
                                    We shampoo all carpet and fabric. This is an add-on service, so it
                                    must be scheduled after a Basic Detail service. Contact us for
                                    details.
                                    <br />
                                    We come to you (within 20 miles of Princeton, MN,)
                                    and require an electric outlet and water spigot within 50ft of your car.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <br />

            <div className='d-xs-block d-md-none' >
                <h1 className="homeTitle" style={{ fontSize: "40px" }}>INTERESTED?</h1>
            </div>
            <div className='d-none d-md-block' >
                <h1 className="homeTitle" style={{ fontSize: "50px" }}>INTERESTED?</h1>
            </div>

            <div className='d-xs-block d-md-none' style={{ textAlign: "center" }}>
                <Button className="myButton" href="/estimate" style={{ backgroundColor: "#3888CB", borderColor: "#3888CB" }}>Get an Estimate</Button>
            </div>
            <div className='d-none d-md-block' style={{ textAlign: "center" }} >
                <Button className="myButton" href="/estimate" style={{ backgroundColor: "#3888CB", borderColor: "#3888CB", width: "20%" }}>Get an Estimate</Button>
            </div>

            <br />

            <Row style={{ backgroundColor: "white", padding: "20px" }}>
                <Col>
                    <h1 className="homeTitle" style={{ fontSize: "40px" }}>ABOUT US</h1>

                    <h4 className="homeMessage">
                        <ArrowRightCircle size={20} /> Specialize in the interiors of cars and watercraft
                    </h4>
                    <h4 className="homeMessage">
                        <ArrowRightCircle size={20} /> Strive to provide every customer with a fair Dinkum experience!
                    </h4>
                    <Button className="myButton" href="/about-us" style={{ display: "flex", justifyContent: "center", backgroundColor: "#3888CB", borderColor: "#3888CB" }}>Learn More</Button>
                </Col>
                <Col>
                    <h1 className="homeTitle" style={{ fontSize: "40px" }}>FIND US</h1>
                    <a className="homeLink" href="https://www.facebook.com/dinkumdetailing" rel="noreferrer" target="_blank">
                        <h4 className="homeMessage" style={{ display: "flex", justifyContent: "center" }}>
                            <Facebook style={{ marginRight: "10px" }} /><span className="linked">Facebook</span>
                        </h4>
                    </a>
                    <a className="homeLink" href="https://goo.gl/maps/6tuzwygfyb8pg6fFA"  rel="noreferrer" target="_blank">
                        <h4 className="homeMessage" style={{ display: "flex", justifyContent: "center" }}>
                            <Google style={{ marginRight: "10px" }} /><span className="linked">Google Maps</span>
                        </h4>
                    </a>
                    <h4 className="homeMessage" style={{ display: "flex", justifyContent: "center" }}>
                        <TelephoneFill style={{ marginRight: "10px" }} />+1 320-496-6010
                    </h4>
                    <h4 className="homeMessage" style={{ display: "flex", justifyContent: "center" }}>
                        <EnvelopeFill style={{ marginRight: "10px" }} />dinkumdetailing@gmail.com
                    </h4>
                </Col>
            </Row>

            {/* <br />

            <h1 style={{ color: "white", textAlign: "center", fontFamily: 'Rubik', textShadow: "2px 2px 4px #000000", fontSize: "75px", marginBottom: "0px", backgroundColor: "#3888CB" }}>
                Reviews
            </h1> */}
        </>
    )
}

export default HomeComponent;