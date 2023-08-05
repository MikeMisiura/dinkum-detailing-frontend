import { Badge, Button, Card, Carousel, Col, Row } from "react-bootstrap";
import './HomeComponent.css'
import { ArrowRightCircle, Facebook, Google, TelephoneFill, EnvelopeFill } from "react-bootstrap-icons";

function HomeComponent() {

    return (
        <>
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

            <div>
                <Carousel controls={false} interval={3000}>
                    <Carousel.Item>
                        <img
                            src="/images/cars/car4.png"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src="/images/cars/car5.png"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src="/images/cars/car6.png"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo e magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <br />

            <Row style={{backgroundColor: "white", padding: "20px"}}>
                <Col>
                    <h1 className="homeTitle">ABOUT US</h1>

                    <h4 className="homeMessage">
                    <ArrowRightCircle size={20} /> Specialize in the interiors of cars and watercraft
                    </h4>
                    <h4 className="homeMessage">
                    <ArrowRightCircle size={20} /> Strive to provide every customer with a fair Dinkum experience!
                    </h4>
                    <Button href="/about-us" style={{display: "flex", justifyContent: "center", backgroundColor: "#3888CB", borderColor: "#3888CB"}}>Learn More</Button>
                </Col>
                <Col>
                <h1 className="homeTitle">FIND US</h1>
                <a className="homeLink" href="https://www.facebook.com/dinkumdetailing" target="_blank">
                    <h4 className="homeMessage" style={{display: "flex", justifyContent: "center"}}>
                    <Facebook style={{marginRight: "10px"}}/>Facebook
                    </h4>
                </a>
                <a className="homeLink" href="https://www.google.com/maps/place/Dinkum+Detailing/@45.5108822,-93.454116,9z/data=!4[…]!8m2!3d45.5108822!4d-93.454116!16s%2Fg%2F11np3cnrlx?entry=ttu" target="_blank">
                    <h4 className="homeMessage" style={{display: "flex", justifyContent: "center"}}>
                    <Google style={{marginRight: "10px"}}/>Google Maps
                    </h4>
                </a>
                    <h4 className="homeMessage" style={{display: "flex", justifyContent: "center"}}>
                    <TelephoneFill style={{marginRight: "10px"}}/>+1 320-496-6010
                    </h4>
                    <h4 className="homeMessage" style={{display: "flex", justifyContent: "center"}}>
                    <EnvelopeFill style={{marginRight: "10px"}}/>dinkumdetailing@gmail.com
                    </h4>
                </Col>
            </Row>


            <br />

            <h1 className="homeTitle">
                SERVICES
            </h1>

            <div style={{ display: "flex" }}>
                <Card style={{ width: "30rem", margin: "10px" }} className="cardHome">
                    <Card.Img variant="top" src="/images/cars/car1.png" />
                    <Card.Body>
                        <Card.Title>Card Title <Badge bg="secondary">New</Badge></Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: "30rem", margin: "10px" }}>
                    <Card.Img variant="top" src="/images/cars/car2.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: "30rem", margin: "10px" }}>
                    <Card.Img variant="top" src="/images/cars/car3.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <br/>

            <h1 className="homeTitle" >
                INTERESTED?
            </h1>
            <div style={{textAlign: "center"}}>
            <Button className="buttonHome" href="/estimate" style={{backgroundColor: "white", color: "black", fontSize: "25px", borderColor: "white"}}>Get an Estimate</Button>
            </div>

            <br />

            <h1 style={{ color: "white", textAlign: "center", fontFamily: 'Rubik', textShadow: "2px 2px 4px #000000", fontSize: "75px", marginBottom: "0px", backgroundColor: "#3888CB" }}>
                Reviews
            </h1>
        </>
    )
}

export default HomeComponent;